import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userDataAlreadyExistTemplate } from './account.config';
import { HashingService } from '../../services/hashing/hashing.service';
import { AccountDAO } from './account.dao';
import { UserDocument } from './account.schema';

@Injectable()
export class AccountService {
	constructor(
		private readonly userAccountDAO: AccountDAO,
		private readonly hashingService: HashingService,
		private readonly jwtService: JwtService,
	) {}

	public createDefaultUser = async ({ email, username, password }: Partial<UserDocument>) => {
		const user = await this.userAccountDAO.doesUserExist(email, username);
		if (user) return this.getError(userDataAlreadyExistTemplate({ email, username }, user));
		const newUser = await this.userAccountDAO.createUser({ email, username, password: this.hashingService.hash(password) });
		return this.login(newUser);
	};

	public auth = async ({ email, password }: Partial<UserDocument>) => {
		const user = await this.userAccountDAO.findByEmail(email, { email: 1, password: 1, username: 1 });
		if (!user) return this.getError('User with this data do not exist');
		const doPasswordsMatch = await this.hashingService.doMatch(password, user.password);
		if (!doPasswordsMatch) return this.getError('Email or password is incorrect');
		return this.login(user);
	};

	public getAccessTokenFromRefresh = async (refreshToken: string) => {
		const user = await this.getUserFromRefreshToken(refreshToken);
		const isTokenMatch = await this.hashingService.doMatch(refreshToken, user?.refreshToken);
		if (!user || !isTokenMatch) return this.getError('Invalid token');
		return this.login(user);
	};

	public logout = (_id: string) => {
		return this.userAccountDAO.updateUserById({ _id }, { $set: { refreshToken: null } });
	};

	private login = async (user: Partial<UserDocument>) => ({
		access_token: this.jwtService.sign({ _id: user._id }, { expiresIn: '30m' }),
		refresh_token: await this.generateRefreshToken(user),
		user: this.parseUserDataForFront(user),
	});

	private generateRefreshToken = (user: Partial<UserDocument>) => {
		const token = this.jwtService.sign({ _id: user._id }, { expiresIn: '20s' });
		user.refreshToken = this.hashingService.hash(token);
		return user.save().then(() => token);
	};

	private getUserFromRefreshToken = (refreshToken: string) => {
		const { _id } = this.jwtService.decode(refreshToken) as Partial<UserDocument>;
		return this.userAccountDAO.findById(_id);
	};

	private parseUserDataForFront = ({ _id, email, username }: Partial<UserDocument>) => ({ _id, email, username });

	private getError = (message: string) => ({ error: message });
}

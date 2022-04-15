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
		if (user) return userDataAlreadyExistTemplate({ email, username }, user);
		const newUser = await this.userAccountDAO.createUser({ email, username, password: this.getHashedPassword(password) });
		return this.login(newUser);
	};

	public auth = async ({ email, password }: Partial<UserDocument>) => {
		const user = await this.userAccountDAO.findByEmail(email, { email: 1, password: 1 });
		if (!user) return 'User with this data do not exist';
		if (!this.hashingService.doMatch(password, user.password)) return 'Email or password is incorrect';
		return this.login(user);
	};

	public login = ({ email, _id }: Partial<UserDocument>) => ({ access_token: this.jwtService.sign({ email, _id }) });

	private getHashedPassword = (password: string) => this.hashingService.hash(password);
}

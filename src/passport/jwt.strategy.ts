import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtVariables } from '../configuration/configuration.constants';
import { UserDocument } from '../entities/user/account.schema';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(private configService: ConfigService) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: configService.get(jwtVariables.secret),
		});
	}

	public validate = async ({ email, _id }: Partial<UserDocument>) => ({ email, userId: _id });
}

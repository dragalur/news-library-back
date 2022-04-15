import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { jwtVariables } from '../configuration/configuration.constants';
import { JwtAuthGuard } from './jwt.guard';

export class JwtInitializeModule {
	public static registerStrategy = () => {
		return JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: this.factory,
		});
	};

	public static registerGuard = () => ({ provide: APP_GUARD, useClass: JwtAuthGuard });

	private static factory = (configService: ConfigService): JwtModuleOptions => {
		return { secret: configService.get<string>(jwtVariables.secret), signOptions: { expiresIn: '60s' } };
	};
}

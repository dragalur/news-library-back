import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { JwtModuleOptions } from '@nestjs/jwt';
import { mongoVariables } from './configuration.constants';
import { MongoDBConnectionConfigs } from './configuration.types';

@Injectable()
export class ConfigurationService {
	constructor(private configs: ConfigService) {}

	public get mongoConfigurations(): MongoDBConnectionConfigs {
		const { get } = this.configs;
		return {
			port: get(mongoVariables.port),
			host: get(mongoVariables.host),
			user: get(mongoVariables.user),
			password: get(mongoVariables.password),
			database: get(mongoVariables.database),
		};
	}

	public getObjectByVariableName = (obj: Record<string, string>) => {
		return Object.entries(obj).reduce((obj, [name, variable]) => (obj[name] = this.configs.get(variable)), {});
	};
}

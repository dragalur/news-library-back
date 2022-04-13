import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoVariables } from '../configuration/configuration.constants';

export class MongodbConnectionModule {
	static forRoot = () => {
		try {
			return MongooseModule.forRootAsync({
				imports: [ConfigModule],
				inject: [ConfigService],
				useFactory: this.factory,
			});
		} catch (e) {
			console.log(e);
		}
	};

	private static factory = async (configs: ConfigService) => {
		const { host, user, password, database, port } = this.connectionOptions(configs);
		const uri = `mongodb://${user}:${password}@${host}:${port}/${database}`;
		return { uri };
	};

	private static connectionOptions(config: ConfigService) {
		return {
			port: config.get(mongoVariables.port),
			host: config.get(mongoVariables.host),
			user: config.get(mongoVariables.user),
			password: config.get(mongoVariables.password),
			database: config.get(mongoVariables.database),
		};
	}
}

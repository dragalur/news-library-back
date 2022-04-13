import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './components/auth/auth.module';
import { HomeModule } from './components/home/home.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { AccountModule } from './entities/user/account.module';
import { IdResponse } from './middleware/idResponse';
import { MongodbConnectionModule } from './mongo/mongo.module';

@Module({
	imports: [
		ConfigurationModule,
		ConfigModule,
		MongooseModule.forRoot(
			'mongodb://uewbyjhzgnavqkxvonjv:FDsSA79BAJDtPsmYN4rM@bh9mmdcanzdrgy1-mongodb.services.clever-cloud.com:27017/bh9mmdcanzdrgy1',
		),
	],
	controllers: [AppController],
	providers: [AppService, AuthModule, HomeModule],
})
export class AppModule implements NestModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(IdResponse).forRoutes('');
	}
}

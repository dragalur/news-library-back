import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigurationModule } from './configuration/configuration.module';
import { NewsModule } from './entities/news/news.module';
import { AccountModule } from './entities/user/account.module';
import { MongodbConnectionModule } from './mongo/mongo.module';

@Module({
	imports: [ConfigurationModule, MongodbConnectionModule.forRoot(), ConfigModule, AccountModule, NewsModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountDAO } from './account.dao';
import { userAccountModelDefinition } from './account.schema';
import { AccountService } from './account.service';

@Module({
	providers: [AccountService, AccountDAO],
	exports: [AccountService],
	imports: [ConfigModule, MongooseModule.forFeature([userAccountModelDefinition], 'users')],
})
export class AccountModule {}

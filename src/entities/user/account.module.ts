import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtInitializeModule } from '../../passport/jwt.module';
import { JwtStrategy } from '../../passport/jwt.strategy';
import { HashingService } from '../../services/hashing/hashing.service';
import { AccountController } from './account.controller';
import { AccountDAO } from './account.dao';
import { userAccountModelDefinition } from './account.schema';
import { AccountService } from './account.service';

@Module({
	imports: [MongooseModule.forFeature([userAccountModelDefinition]), ConfigModule, JwtInitializeModule.registerStrategy()],
	providers: [AccountService, AccountDAO, HashingService, JwtStrategy, JwtInitializeModule.registerGuard()],
	controllers: [AccountController],
	exports: [AccountService, AccountDAO],
})
export class AccountModule {}

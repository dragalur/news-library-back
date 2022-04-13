import { Module } from '@nestjs/common';
import { AccountModule } from 'src/entities/user/account.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
	imports: [AccountModule],
	providers: [AuthService],
	controllers: [AuthController],
	exports: [AuthService],
})
export class AuthModule {}

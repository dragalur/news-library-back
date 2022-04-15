import { Module } from '@nestjs/common';
import { AccountModule } from '../../entities/user/account.module';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

@Module({
	providers: [HomeService, AccountModule],
	controllers: [HomeController],
})
export class HomeModule {}

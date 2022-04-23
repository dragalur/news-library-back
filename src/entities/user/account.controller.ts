import { Body, Controller, Post } from '@nestjs/common';
import { Public } from '../../passport/public.guard';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
	constructor(private accountService: AccountService) {}

	@Public()
	@Post('login')
	async login(@Body() body) {
		return this.accountService.auth(body);
	}

	@Public()
	@Post('create')
	async register(@Body() body) {
		return this.accountService.createDefaultUser(body);
	}

	@Public()
	@Post('refreshToken')
	updateAccessToken(@Body() body) {
		return this.accountService.getAccessTokenFromRefresh(body.refreshToken);
	}

	@Post('logout')
	logout(@Body('_id') _id: string) {
		return this.accountService.logout(_id);
	}
}

import { Body, Controller, Get, Post, Request } from '@nestjs/common';
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

	@Get('profile')
	getProfile(@Request() req) {
		return req.user;
	}
}

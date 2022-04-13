import { Body, Controller, Post } from '@nestjs/common';
// import { CreateUserDTO } from 'src/entity/user/user.dto';
import { AuthService } from './auth.service';

@Controller('account')
export class AuthController {
	constructor(private authService: AuthService) {}

	@Post('')
	register(@Body() body) {
		// return this.authService.createAccount(body);
	}
}

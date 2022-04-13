import { Injectable } from '@nestjs/common';
import { UserDocument } from 'src/entities/user/account.schema';
import { AccountService } from 'src/entities/user/account.service';

@Injectable()
export class AuthService {
	// constructor(private readonly userService: AccountService) {}
	// async createAccount(createUserDTO: Partial<UserDocument>) {
	// 	return this.userService.createDefaultUser(createUserDTO);
	// }
}

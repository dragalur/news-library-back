import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { AccountDAO } from './account.dao';
import { UserDocument } from './account.schema';

@Injectable()
export class AccountService {
	constructor(private readonly userAccountDAO: AccountDAO) {}

	// public findByUsername = (username: string) => {
	// 	return this.userAccountDAO.findByUsername(username);
	// };

	// public findById = (id: string | ObjectId) => {
	// 	return this.userAccountDAO.findById(id);
	// };

	public createDefaultUser = (userCreateDTO: Partial<UserDocument>) => {
		return this.userAccountDAO.createUser(userCreateDTO);
	};
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account, UserDocument } from './account.schema';

@Injectable()
export class AccountDAO {
	constructor(@InjectModel(Account.name) private readonly userModel: Model<UserDocument>) {}

	// public findByUsername = (username: string) => {
	// 	return this.userModel.findOne({ username });
	// };

	// public findById = (id: string | ObjectId) => {
	// 	return this.userModel.findById(id);
	// };

	public createUser = (userData: Partial<UserDocument>) => {
		return this.userModel.create(userData);
	};
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, UpdateQuery } from 'mongoose';
import { Account, UserDocument } from './account.schema';

@Injectable()
export class AccountDAO {
	constructor(@InjectModel(Account.name) private readonly userModel: Model<UserDocument>) {}

	public findById = (_id: string, projection = {}) => {
		return this.userModel.findOne({ _id }, projection);
	};

	public findByEmail = (email: string, projection = {}) => {
		return this.userModel.findOne({ email }, projection);
	};

	public createUser = (userData: Partial<UserDocument>) => {
		return this.userModel.create(userData);
	};

	public updateUserById = (query: FilterQuery<UserDocument>, updateQuery: UpdateQuery<UserDocument>) => {
		return this.userModel.updateOne(query, updateQuery);
	};

	public doesUserExist = (email: string, username: string) => {
		return this.userModel.findOne({ $or: [{ email }, { username }] }, { email: 1, username: 1, _id: 0 }).lean();
	};
}

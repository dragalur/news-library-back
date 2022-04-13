import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Account & Document;

@Schema({ collection: 'users', timestamps: true })
export class Account {
	@Prop(String)
	email: string;

	@Prop(String)
	password: string;

	@Prop(String)
	username: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);

export const userAccountModelDefinition: ModelDefinition = {
	name: Account.name,
	schema: AccountSchema,
};

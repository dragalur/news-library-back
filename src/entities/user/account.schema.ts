import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Account & Document;

@Schema({ collection: 'users' })
export class Account {
	@Prop({ type: String, unique: true })
	email: string;

	@Prop(String)
	password: string;

	@Prop({ type: String, unique: true })
	username: string;

	@Prop(String)
	refreshToken: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);

export const userAccountModelDefinition: ModelDefinition = {
	name: Account.name,
	schema: AccountSchema,
};

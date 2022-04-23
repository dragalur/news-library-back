import { Document } from 'mongoose';
import { ModelDefinition, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Account } from '../user/account.schema';

export type NewsDocument = News & Document;

@Schema({ collection: 'news', timestamps: true })
export class News {
	@Prop(String)
	title: string;

	@Prop(String)
	text: string;

	@Prop(Date)
	createDate: Date;

	@Prop(String)
	authorName: string;

	@Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'users' })
	authorId: Account;
}

export const NewsSchema = SchemaFactory.createForClass(News);

export const newsAccountModelDefinition: ModelDefinition = {
	name: News.name,
	schema: NewsSchema,
};

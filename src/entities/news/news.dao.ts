import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, FilterQuery, UpdateQuery } from 'mongoose';
import { News, NewsDocument } from './news.schema';

@Injectable()
export class NewsDAO {
	constructor(@InjectModel(News.name) private readonly newsModel: Model<NewsDocument>) {}

	public getAll = () => {
		return this.newsModel.find().limit(30);
	};

	public findById = (_id: string, projection = {}) => {
		return this.newsModel.findOne({ _id }, projection);
	};

	public createNews = (newsData: Partial<NewsDocument>) => {
		return this.newsModel.create(newsData);
	};

	public updateOneNews = (query: FilterQuery<NewsDocument>, updateQuery: UpdateQuery<NewsDocument>) => {
		return this.newsModel.updateOne(query, updateQuery);
	};

	public deleteOnePost = (query: FilterQuery<NewsDocument>) => {
		return this.newsModel.deleteOne(query);
	};

	public findMany = (query: FilterQuery<NewsDocument>, projection = {}) => {
		return this.newsModel.find(query, projection);
	};
}

import { Injectable } from '@nestjs/common';
import { NewsDAO } from './news.dao';
import { NewsDocument } from './news.schema';

@Injectable()
export class NewsService {
	constructor(private readonly userAccountDAO: NewsDAO) {}

	public getNewsById = (_id: string) => {
		return this.userAccountDAO.findById(_id);
	};

	public createNews = async (news: Partial<NewsDocument>) => {
		return this.userAccountDAO.createNews(news);
	};

	public getAllNews = () => {
		return this.userAccountDAO.getAll();
	};

	public updatePost = (_id: string, { text, title }: Partial<NewsDocument>) => {
		return this.userAccountDAO.updateOneNews({ _id }, { $set: { text, title } });
	};

	public deletePostById = (_id: string) => {
		return this.userAccountDAO.deleteOnePost({ _id });
	};

	public getAllUserPosts = (authorId: string) => {
		return this.userAccountDAO.findMany({ authorId }, { title: 1 });
	};
}

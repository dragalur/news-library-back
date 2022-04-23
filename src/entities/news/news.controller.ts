import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
	constructor(private newsService: NewsService) {}

	@Post('create')
	async register(@Body() body) {
		return this.newsService.createNews(body);
	}

	@Get('')
	async getAll() {
		return this.newsService.getAllNews();
	}

	@Get(':newsId')
	async getOne(@Param('newsId') newsId: string) {
		return this.newsService.getNewsById(newsId);
	}

	@Get('user/:userId')
	async getUserPosts(@Param('userId') userId: string) {
		return this.newsService.getAllUserPosts(userId);
	}

	@Patch(':newsId')
	async updatePost(@Param('newsId') newsId: string, @Body() body) {
		return this.newsService.updatePost(newsId, body);
	}

	@Delete(':newsId')
	async deletePost(@Param('newsId') newsId: string) {
		return this.newsService.deletePostById(newsId);
	}
}

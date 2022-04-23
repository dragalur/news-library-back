import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsController } from './news.controller';
import { NewsDAO } from './news.dao';
import { newsAccountModelDefinition } from './news.schema';
import { NewsService } from './news.service';

@Module({
	imports: [MongooseModule.forFeature([newsAccountModelDefinition])],
	providers: [NewsService, NewsDAO],
	controllers: [NewsController],
})
export class NewsModule {}

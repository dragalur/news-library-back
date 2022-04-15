import { Injectable, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './passport/jwt.guard';

@Injectable()
export class AppService {
	// @UseGuards(JwtAuthGuard)
	getHello(): string {
		return 'Hello World!111';
	}
}

import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class IdResponse implements NestMiddleware {
	i = 0;
	use(req: Request, res: Response, next: NextFunction) {
		req.body.id = this.i;
		this.i++;
		next();
	}
}

import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
	getData() {
		return 'Welcome on home page';
	}
}

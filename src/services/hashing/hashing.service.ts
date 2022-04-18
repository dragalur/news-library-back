import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { saltRounds } from './hashing.configs';

@Injectable()
export class HashingService {
	public hash = (value: string) => bcrypt.hashSync(value, saltRounds);

	public doMatch = (value: string, hash: string) => bcrypt.compare(value, hash);
}

import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { saltRounds } from './hashing.configs';

@Injectable()
export class HashingService {
    public hash = (password: string) => bcrypt.hashSync(password, saltRounds);

    public doMatch = (password: string, hash: string) => bcrypt.compare(password, hash);
}

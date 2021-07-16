import {Injectable} from '@angular/core';

@Injectable()
export class HeroService {
    public static getName(): string {
        return 'Hello World!!';
    }
}

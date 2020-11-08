import { Owner } from './owner.model';

export class Todo {
    id: number;
    description: string;
    completed: boolean;
    owner: Owner;

    constructor(init?: Partial<Todo>) {
        Object.assign(this, init);
    }
}

export class Owner {
    firstName: string;
    lastName: string;

    constructor(init?: Partial<Owner>) {
        Object.assign(this, init);
    }
}

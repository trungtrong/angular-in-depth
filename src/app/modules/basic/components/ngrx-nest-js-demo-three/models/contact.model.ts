export class Contact {
    id?: number;
    name: string;
    email: string;
    phone?: string;

    constructor(init?: Partial<Contact>) {
        Object.assign(this, init);
    }
}

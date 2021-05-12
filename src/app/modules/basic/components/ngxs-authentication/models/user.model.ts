export class UserModel {
    id: string;
    email: string;
    password: string;
    token?: string;

    constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}

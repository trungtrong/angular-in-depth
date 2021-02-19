export class UserModel {
    username: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: number;

    constructor(init?: Partial<UserModel>) {
        Object.assign(this, init);
    }
}

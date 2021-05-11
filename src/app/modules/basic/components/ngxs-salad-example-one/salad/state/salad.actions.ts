export class AddTopping {
    static readonly type = '[salad] add topping';
    constructor(public payload: any) {
    }
}

export class StartOrder {
    static readonly type = '[salad] start order';
}

// tslint:disable-next-line:no-namespace
export namespace Salad {
    export class Add {
        static readonly type = '[salad] add topping';
        constructor(public payload: any) {
        }
    }
}

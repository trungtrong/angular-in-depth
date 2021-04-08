export class ArticleModel {
    id: string;
    slug: string;
    title: string;
    content: string;
    updateAt: string;

    constructor(init?: Partial<ArticleModel>) {
        Object.assign(this, init);
    }
}

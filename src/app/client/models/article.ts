export class Article {
    public _id: string;
    public title: string;
    public body: string;

    constructor(_id, title, body) {
        this._id = _id;
        this.title = title;
        this.body = body;
    }
}
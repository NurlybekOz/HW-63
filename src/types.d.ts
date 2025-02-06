export interface IPost {
    id: string;
    date: string;
    description: string;
    title: string;

}

export interface IPostForm {
    date: string;
    description: string;
    title: string
}

export interface IPostApi {
    [id: string]: IPostForm;
}
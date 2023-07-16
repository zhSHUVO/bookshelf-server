import { Model } from "mongoose";

export type IBook = {
    title: string;
    author: string;
    image: string;
    price: number;
    genre: string;
    publicationDate: string;
    reviews: object;
};

export type BookModel = Model<IBook, Record<string, unknown>>;

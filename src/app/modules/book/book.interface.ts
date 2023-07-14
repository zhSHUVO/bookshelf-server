import { Model } from "mongoose";

export type IPubDate = {
    month: string;
    year: number;
};

export type IBook = {
    title: string;
    author: string;
    image: string;
    price: number;
    genre: string;
    publicationDate: string;
};

export type BookModel = Model<IBook, Record<string, unknown>>;

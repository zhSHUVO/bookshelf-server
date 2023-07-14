import { Types } from "mongoose";
import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBook): Promise<IBook | null> => {
    const newBook = await Book.create(book);
    return newBook;
};

const getAllBooks = async (): Promise<IBook[]> => {
    const allBooks = await Book.find();
    return allBooks;
};

const getSingleBook = async (id:string | Types.ObjectId): Promise<IBook | null> => {
    const book = await Book.findById({ _id: id });
    return book;
};

export const BookService = {
    createBook,
    getAllBooks,
    getSingleBook,
};

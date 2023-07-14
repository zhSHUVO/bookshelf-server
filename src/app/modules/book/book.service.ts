import { IBook } from "./book.interface";
import { Book } from "./book.model";

const createBook = async (book: IBook): Promise<IBook | null> => {
    const newBook = await Book.create(book);
    return newBook;
};

const getBooks = async () => {
    const books = await Book.find();
    return books;
};

export const BookService = {
    createBook,getBooks
};

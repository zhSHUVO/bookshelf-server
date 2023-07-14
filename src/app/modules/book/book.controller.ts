import { Request, RequestHandler, Response } from "express";
import { BookService } from "./book.service";

const createBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const bookData = req.body;
        const newBook = await BookService.createBook(bookData);

        res.send({ status: true, data: newBook });
    } catch (error) {
        console.error("Error adding book:", error);

        res.status(500).json({
            error: "An error occurred while adding the book",
        });
    }
};

const getBooks: RequestHandler = async (req: Request, res: Response) => {
    try {
        const allBooks = await BookService.getBooks();
        res.send({ status: true, data: allBooks });
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({
            error: "An error occurred while fetching books",
        });
    }
};

export const BookController = {
    createBook,getBooks
};

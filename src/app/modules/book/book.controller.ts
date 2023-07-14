import { Request, RequestHandler, Response } from "express";
import { BookService } from "./book.service";

const createBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const bookData = req.body;
        const newBook = await BookService.createBook(bookData);

        res.send({ status: true, data: newBook });
    } catch (error) {
        console.error(`\x1B[31mError adding book:, ${error}`);

        res.status(500).json({
            error: "An error occurred while adding the book",
        });
    }
};

const getAllBooks: RequestHandler = async (req: Request, res: Response) => {
    try {
        const allBooks = await BookService.getAllBooks();
        res.send({ status: true, data: allBooks });
    } catch (error) {
        console.error(`\x1B[31mError fetching books:, ${error}`);

        res.status(500).json({
            error: "An error occurred while fetching books",
        });
    }
};

const getSingleBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const book = await BookService.getSingleBook(req.params.id);
        res.send({ status: true, data: book });
    } catch (error) {
        console.error(`\x1B[31mError fetching books:, ${error}`);

        res.status(500).json({
            error: "An error occurred while fetching the book",
        });
    }
};

export const BookController = {
    createBook,
    getAllBooks,
    getSingleBook,
};

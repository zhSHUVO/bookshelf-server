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
        const id = req.params.id;
        const book = await BookService.getSingleBook(id);
        res.send({ status: true, data: book });
    } catch (error) {
        console.error(`\x1B[31mError fetching book:, ${error}`);

        res.status(500).json({
            error: "An error occurred while fetching the book",
        });
    }
};

const updateBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const updatedCow = await BookService.updateBook(id, updatedData);
        res.send({ status: true, data: updatedCow });
    } catch (error) {
        console.error(`\x1B[31mError updating book:, ${error}`);

        res.status(500).json({
            error: "An error occurred while updating the book",
        });
    }
};

const deleteBook: RequestHandler = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const deletedCow = await BookService.deleteBook(id);
        res.send({ status: true, data: deletedCow });
    } catch (error) {
        console.error(`\x1B[31mError deleting book:, ${error}`);

        res.status(500).json({
            error: "An error occurred while deleting the book",
        });
    }
};

const postReview: RequestHandler = async (req: Request, res: Response) => {
    try {
       
        const bookId = req.params.id;
        const review = req.body.review;
        const email = req.body.email;

        const newReview = await BookService.postReview(bookId, email, review);
        res.send({ status: true, data: newReview });
    } catch (error) {
        console.error(`\x1B[31mError posting review:, ${error}`);

        res.status(500).json({
            error: "An error occurred while adding the review",
        });
    }
};

export const BookController = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
    postReview,
};

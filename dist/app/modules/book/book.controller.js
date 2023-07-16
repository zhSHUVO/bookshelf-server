"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookData = req.body;
        const newBook = yield book_service_1.BookService.createBook(bookData);
        res.send({ status: true, data: newBook });
    }
    catch (error) {
        console.error(`\x1B[31mError adding book:, ${error}`);
        res.status(500).json({
            error: "An error occurred while adding the book",
        });
    }
});
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBooks = yield book_service_1.BookService.getAllBooks();
        res.send({ status: true, data: allBooks });
    }
    catch (error) {
        console.error(`\x1B[31mError fetching books:, ${error}`);
        res.status(500).json({
            error: "An error occurred while fetching books",
        });
    }
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const book = yield book_service_1.BookService.getSingleBook(id);
        res.send({ status: true, data: book });
    }
    catch (error) {
        console.error(`\x1B[31mError fetching book:, ${error}`);
        res.status(500).json({
            error: "An error occurred while fetching the book",
        });
    }
});
const updateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const updatedCow = yield book_service_1.BookService.updateBook(id, updatedData);
        res.send({ status: true, data: updatedCow });
    }
    catch (error) {
        console.error(`\x1B[31mError updating book:, ${error}`);
        res.status(500).json({
            error: "An error occurred while updating the book",
        });
    }
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedCow = yield book_service_1.BookService.deleteBook(id);
        res.send({ status: true, data: deletedCow });
    }
    catch (error) {
        console.error(`\x1B[31mError deleting book:, ${error}`);
        res.status(500).json({
            error: "An error occurred while deleting the book",
        });
    }
});
const postReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookId = req.params.id;
        const review = req.body.review;
        const email = req.body.email;
        const newReview = yield book_service_1.BookService.postReview(bookId, email, review);
        res.send({ status: true, data: newReview });
    }
    catch (error) {
        console.error(`\x1B[31mError posting review:, ${error}`);
        res.status(500).json({
            error: "An error occurred while adding the review",
        });
    }
});
exports.BookController = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
    postReview,
};

import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router
    .route("/")
    .post(BookController.createBook)
    .get(BookController.getAllBooks);

router
    .route("/:id")
    .get(BookController.getSingleBook)
    .patch(BookController.updateBook)
    .delete(BookController.deleteBook)
    .post(BookController.postReview);

export const BookRoute = router;

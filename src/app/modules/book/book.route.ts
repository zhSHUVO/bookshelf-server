import express from "express";
import { BookController } from "./book.controller";

const router = express.Router();

router.route("/").post(BookController.createBook).get(BookController.getBooks);

export const BookRoute = router;

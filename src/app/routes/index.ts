import express from "express";
import { BookRoute } from "../modules/book/book.route";

const router = express.Router();

const moduleRoutes = [
    {
        path: "/book",
        route: BookRoute,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

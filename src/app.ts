import cors from "cors";
import express, { Application, Request, Response } from "express";
import apiRouter from "./app/routes";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
    res.send("Server is Up");
});

app.use("/api/v1", apiRouter);

export default app;

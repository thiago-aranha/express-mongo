import express from "express";
import connectLibraryDatabase from "./cfg/dbconnect.js";
import homeRoutes from "./routes/homeRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import authorRoutes from "./routes/authorRoutes.js";
import { errorHandler, pageNotFound } from "./middleware/errorHandler.js";

const connection = await connectLibraryDatabase();

connection.on("error", (error) => {
    console.error("Database connection error:", error);
});

connection.once("open", () => {
    console.log("Database connected successfully!");
});

const app = express();

app.use(express.json());

app.use('/', homeRoutes);
app.use('/books', bookRoutes);
app.use('/authors', authorRoutes);

app.use(pageNotFound);
app.use(errorHandler);

export default app;
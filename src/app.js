import express from "express";
import connectLibraryDatabase from "./cfg/dbconnect.js";
import homeRoutes from "./routes/homeRoutes.js";
import booksRoutes from "./routes/bookRoutes.js";

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
app.use('/books', booksRoutes);

export default app;
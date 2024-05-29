import express from "express";
import connectLibraryDatabase from "./cfg/dbconnect.js";

const connection = await connectLibraryDatabase();

connection.on("error", (error) => {
    console.error("Database connection error:", error);
});

connection.once("open", () => {
    console.log("Database connected successfully!");
});

const app = express();
app.use(express.json());

const books = [
    {
        id: 1,
        title: "Lord of Rings"
    },
    {
        id: 2,
        title: "Robbit"
    }
];

function getIndexBookByID(id) {
    return books.findIndex(book => {
        return book.id === Number(id);
    });
};

app.get("/", (req, res) => {
    res.status(200).send("Node.js training");
});

app.get("/books", (req, res) => {
    res.status(200).json(books);
});

app.get("/books/:id", (req, res) => {
    const index = getIndexBookByID(req.params.id);
    res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).send("Book successfully created!");
});

app.put("/books/:id", (req, res) => {
    const index = getIndexBookByID(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
    const index = getIndexBookByID(req.params.id);
    books.splice(index, 1);
    res.status(200).send(`Book ${req.params.id} sucessfully removed!`);
});

export default app;
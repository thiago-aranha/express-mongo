import book from "../models/bookModel.js";

export const getBooks = async (req, res) => {
    try {
        const bookList = await book.find({});
        res.status(200).json(bookList);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

export const getBookById = (req, res) => {
    const index = getIndexBookByID(req.params.id);
    res.status(200).json(books[index]);
};

export const addBook = (req, res) => {
    books.push(req.body);
    res.status(201).send("Book successfully created!");
};

export const updateBook = (req, res) => {
    const index = getIndexBookByID(req.params.id);
    books[index].title = req.body.title;
    res.status(200).json(books);
};

export const deleteBook = (req, res) => {
    const index = getIndexBookByID(req.params.id);
    books.splice(index, 1);
    res.status(200).send(`Book ${req.params.id} sucessfully removed!`);
}
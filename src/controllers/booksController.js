import book from "../models/bookModel.js";

class BookController {
    static async getBooks (req, res) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
        } catch (error) {
            res.status(500).json({message: error.message});
        }            
    };
    
    static async getBookById (req, res) {
        const index = getIndexBookByID(req.params.id);
        res.status(200).json(books[index]);
    };
    
    static async addBook (req, res) {
        books.push(req.body);
        res.status(201).send("Book successfully created!");
    };
    
    static async updateBook (req, res) {
        const index = getIndexBookByID(req.params.id);
        books[index].title = req.body.title;
        res.status(200).json(books);
    };
    
    static async deleteBook (req, res) {
        const index = getIndexBookByID(req.params.id);
        books.splice(index, 1);
        res.status(200).send(`Book ${req.params.id} sucessfully removed!`);
    };

};

export default BookController;
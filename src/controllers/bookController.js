import book from "../models/bookModel.js";

class BookController {
    static async getBooks (req, res) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Error getting book list`});
        }            
    };
    
    static async getBookById (req, res) {
        try {
            const searchedBook = await book.findById(req.params.id);
            res.status(200).json(searchedBook);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to obtain book with id ${req.params.id}`})
        }
    };
    
    static async addBook (req, res) {
        try {
            const newBook = await book.create(req.body);
            res.status(201).json({ message: "Book successfully created!", book: newBook});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Error to create book`});
        }
    };
    
    static async updateBook (req, res) {
        try {
            await book.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({message: `Book ${req.params.id} successfully updated!`});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to update book with id ${req.params.id}`});
        }
    };

    static async deleteBook (req, res) {
        try {
            await book.findByIdAndDelete(req.params.id);
            res.status(200).json({message: `Book ${req.params.id} successfully deleted!`});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to remove book with id ${req.params.id}`});
        }
    };

};

export default BookController;
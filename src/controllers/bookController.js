import book from "../models/bookModel.js";
import { author } from "../models/authorModel.js";

class BookController {
    static async getBooks (req, res, next) {
        try {
            const bookList = await book.find({});
            res.status(200).json(bookList);
        } catch (error) {
            next(error);
        }            
    };
    
    static async getBookById (req, res, next) {
        try {
            const searchedBook = await book.findById(req.params.id);
            if (searchedBook !== null) {
                res.status(200).json(searchedBook);
            } else {
                res.status(404).json({message: `Book ID not found ${req.params.id}`});
            }
        } catch (error) {
            next(error);
        }
    };

    static async getBooksByFilter (req, res, next) {
        try {
            const {company, title, price, pages} = req.query;
            const search = {};

            if (company) search.company = new RegExp(company, "i");
            if (title) search.title = new RegExp(title, "i");
            if (price) search.price = price;
            if (pages) search.pages = pages;

            const booksReturned = await book.find(search);
            res.status(200).json(booksReturned);

        } catch (error) {
            next(error);
        }
    }
    
    static async addBook (req, res, next) {
        try {
            let bookWithAuthor = req.body;
            if (req.body.author !== null && req.body.author !== undefined) {
                const searchedAuthor = await author.findById(req.body.author);
                bookWithAuthor = { ...req.body, author: { ...searchedAuthor._doc} }
            }
            const newBook = await book.create(bookWithAuthor);
            res.status(201).json({ message: "Book successfully created!", book: newBook});
        } catch (error) {
            next(error);
        }
    };
    
    static async updateBook (req, res, next) {
        try {
            const updatedBook = await book.findByIdAndUpdate(req.params.id, req.body);
            if (updatedBook !== null) {
                res.status(200).json({message: `Book ${req.params.id} successfully updated!`});
            } else {
                res.status(404).json({message: `Book ID not found ${req.params.id}`});
            }
        } catch (error) {
            next(error);
        }
    };

    static async deleteBook (req, res, next) {
        try {
            const deletedBook = await book.findByIdAndDelete(req.params.id);
            if (deletedBook !== null) {
                res.status(200).json({message: `Book ${req.params.id} successfully deleted!`});
            } else {
                res.status(404).json({message: `Book ID not found ${req.params.id}`});
            }
        } catch (error) {
            next(error);
        }
    };

};

export default BookController;
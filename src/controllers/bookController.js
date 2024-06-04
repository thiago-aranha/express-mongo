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
            res.status(200).json(searchedBook);
        } catch (error) {
            next(error);
        }
    };

    static async getBooksByCompany (req, res, next) {
        const searchedCompany = req.query.company;
        try {
            const booksByCompany = await book.find({ company: searchedCompany});
            res.status(200).json(booksByCompany);
        } catch (error) {
            next(error);
        }
    }
    
    static async addBook (req, res, next) {
        try {
            const searchedAuthor = await author.findById(req.body.author);
            const bookWithAuthor = { ...req.body, author: { ...searchedAuthor._doc} }
            const newBook = await book.create(bookWithAuthor);
            res.status(201).json({ message: "Book successfully created!", book: newBook});
        } catch (error) {
            next(error);
        }
    };
    
    static async updateBook (req, res, next) {
        try {
            await book.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({message: `Book ${req.params.id} successfully updated!`});
        } catch (error) {
            next(error);
        }
    };

    static async deleteBook (req, res, next) {
        try {
            await book.findByIdAndDelete(req.params.id);
            res.status(200).json({message: `Book ${req.params.id} successfully deleted!`});
        } catch (error) {
            next(error);
        }
    };

};

export default BookController;
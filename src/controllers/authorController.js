import mongoose from "mongoose";
import { author } from "../models/authorModel.js";

class AuthorController {
    static async getAuthors (req, res, next) {
        try {
            const authorList = await author.find({});
            res.status(200).json(authorList);
        } catch (error) {
            next(error);
        }          
    };
    
    static async getAuthorById (req, res, next) {
        try {
            const searchedAuthor = await author.findById(req.params.id);
            if (searchedAuthor !== null) {
                res.status(200).json(searchedAuthor);
            } else {
                res.status(404).json({message: `Author ID not found ${req.params.id}`})
            }
        } catch (error) {
            next(error);
        }
    };
    
    static async addAuthor (req, res, next) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Author successfully created!", author: newAuthor});
        } catch (error) {
            next(error);
        }
    };
    
    static async updateAuthor (req, res, next) {
        try {
            const updatedAuthor = await author.findByIdAndUpdate(req.params.id, req.body);
            if (updatedAuthor !== null) {
                res.status(200).json({message: `Author ${req.params.id} successfully updated!`});
            } else {
                res.status(404).json({message: `Author ID not found ${req.params.id}`});
            }
        } catch (error) {
            next(error);
        }
    };

    static async deleteAuthor (req, res, next) {
        try {
            const deletedAuthor = await author.findByIdAndDelete(req.params.id);
            if (deletedAuthor !== null) {
                res.status(200).json({message: `Author ${req.params.id} successfully deleted!`});
            } else {
                res.status(404).json({message: `Author ID not found ${req.params.id}`});
            }
        } catch (error) {
            next(error);
        }
    };

};

export default AuthorController;
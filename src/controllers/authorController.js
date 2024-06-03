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
            await author.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({message: `Author ${req.params.id} successfully updated!`});
        } catch (error) {
            next(error);
        }
    };

    static async deleteAuthor (req, res, next) {
        try {
            await author.findByIdAndDelete(req.params.id);
            res.status(200).json({message: `Author ${req.params.id} successfully deleted!`});
        } catch (error) {
            next(error);
        }
    };

};

export default AuthorController;
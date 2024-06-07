import mongoose from "mongoose";
import invalidRequest from "../errors/invalidRequest.js"
import { author } from "../models/authorModel.js";

class AuthorController {
    static async getAuthors (req, res, next) {
        try {
            let {limit = 5, page = 1} = req.query;
            limit = parseInt(limit);
            page = parseInt(page);

            if (limit > 0 && page > 0) {
                const authorList = await author.find({})
                    .skip((page - 1) * limit)
                    .limit(limit);
    
                res.status(200).json(authorList);
            } else {
                next(new invalidRequest());
            }

        } catch (error) {
            next(error);
        }          
    };
    
    static async getAuthorById (req, res, next) {
        try {
            const searchedAuthor = await author.findById(req.params.id);
            if (searchedAuthor) {
                res.status(200).json(searchedAuthor);
            } else {
                return next(new pageNotFoundError(`Author ID not found ${req.params.id}`));
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
            if (updatedAuthor) {
                res.status(200).json({message: `Author ${req.params.id} successfully updated!`});
            } else {
                return next(new pageNotFoundError(`Author ID not found ${req.params.id}`));
            }
        } catch (error) {
            next(error);
        }
    };

    static async deleteAuthor (req, res, next) {
        try {
            const deletedAuthor = await author.findByIdAndDelete(req.params.id);
            if (deletedAuthor) {
                res.status(200).json({message: `Author ${req.params.id} successfully deleted!`});
            } else {
                return next(new pageNotFoundError(`Author ID not found ${req.params.id}`));
            }
        } catch (error) {
            next(error);
        }
    };

};

export default AuthorController;
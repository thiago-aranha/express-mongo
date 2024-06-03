import { author } from "../models/authorModel.js";

class AuthorController {
    static async getAuthors (req, res) {
        try {
            const authorList = await author.find({});
            res.status(200).json(authorList);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Error getting author list`});
        }            
    };
    
    static async getAuthorById (req, res) {
        try {
            const searchedAuthor = await author.findById(req.params.id);
            res.status(200).json(searchedAuthor);
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to obtain author with id ${req.params.id}`})
        }
    };
    
    static async addAuthor (req, res) {
        try {
            const newAuthor = await author.create(req.body);
            res.status(201).json({ message: "Author successfully created!", author: newAuthor});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Error to create author`});
        }
    };
    
    static async updateAuthor (req, res) {
        try {
            await author.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({message: `Author ${req.params.id} successfully updated!`});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to update author with id ${req.params.id}`});
        }
    };

    static async deleteAuthor (req, res) {
        try {
            await author.findByIdAndDelete(req.params.id);
            res.status(200).json({message: `Author ${req.params.id} successfully deleted!`});
        } catch (error) {
            res.status(500).json({message: `${error.message} - Failed to remove author with id ${req.params.id}`});
        }
    };

};

export default AuthorController;
import mongoose from "mongoose";
import { author, authorSchema } from "./authorModel.js";

const bookSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        title: {type: String, required: true},
        company: {type: String},
        price: {type: Number},
        pages: {type: Number},
        author: authorSchema
     },
    { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;
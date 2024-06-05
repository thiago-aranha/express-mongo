import mongoose from "mongoose";
import { author, authorSchema } from "./authorModel.js";

const bookSchema = new mongoose.Schema(
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        title: {
            type: String,
            required: [true, "You must define a book title"]
        },
        company: {
            type: String,
            required: [true, "Company is mandatory"]},
        price: {type: Number},
        pages: {
            type: Number,
            min: 10,
            max: 5000},
        author: authorSchema
     },
    { versionKey: false });

const book = mongoose.model("books", bookSchema);

export default book;
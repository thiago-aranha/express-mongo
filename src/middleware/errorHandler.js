import mongoose from "mongoose";

function errorHandler(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({message: `Invalid request format ${req.params.id}`});
    } else {
        res.status(500).json({message: 'Internal error'});
    }
};

export default errorHandler;
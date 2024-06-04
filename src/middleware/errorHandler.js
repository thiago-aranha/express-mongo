import mongoose from "mongoose";

function errorHandler(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({message: `Invalid request format ${req.params.id}`});
    } else if (error instanceof mongoose.Error.ValidationError) {
        res.status(400).send({message: `Validation error: ${Object.values(error.errors)
            .map(error => error.message)
            .join("; ")}`})
    } else {
        res.status(500).json({message: 'Internal error'});
    }
};

export default errorHandler;
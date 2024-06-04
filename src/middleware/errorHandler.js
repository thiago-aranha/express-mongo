import mongoose from "mongoose";
import baseError from "../errors/baseError.js";
import invalidRequest from "../errors/invalidRequest.js";
import validationError from "../errors/validationError.js";
import pageNotFoundError from "../errors/pageNotFound.js";

function pageNotFound(req, res, next) {
    const error404 = new pageNotFoundError();
    next(error404);
}

function errorHandler(error, req, res, next) {
    if (error instanceof mongoose.Error.CastError) {
        new invalidRequest().sendResponse(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
        new validationError(error).sendResponse(res);
    } else if (error instanceof pageNotFoundError) {
        error.sendResponse(res);
    } else {
        new baseError().sendResponse(res);
    }
};

export { errorHandler, pageNotFound };
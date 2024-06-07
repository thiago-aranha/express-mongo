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
        const invalidReqError = new invalidRequest();
        invalidReqError.sendResponse(res);
    } else if (error instanceof mongoose.Error.ValidationError) {
        const validationErr = new validationError(error);
        validationErr.sendResponse(res);
    } else if (error instanceof invalidRequest) {
        error.sendResponse(res);
    } else if (error instanceof validationError) {
        error.sendResponse(res);
    } else if (error instanceof baseError) {
        error.sendResponse(res);
    } else {
        const baseErr = new baseError();
        baseErr.sendResponse(res);
    }
}

export { errorHandler, pageNotFound };
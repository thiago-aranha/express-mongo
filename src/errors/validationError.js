import baseError from "./baseError.js";

class validationError extends baseError {
    constructor(validationErrors, msg = "Validation error") {
        super(msg, 422);
        this.validationErrors = validationErrors;
    }

    sendResponse(res) {
        res.status(this.status).json({
            message: this.message,
            status: this.status,
            errors: this.validationErrors
        });
    }
}

export default validationError;
import baseError from "./baseError.js";

class pageNotFoundError extends baseError {
    constructor(msg = "Page not found") {
        super(msg, 404);
    }
}

export default pageNotFoundError;
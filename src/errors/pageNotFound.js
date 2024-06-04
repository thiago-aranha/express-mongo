import baseError from "./baseError.js";

class pageNotFoundError extends baseError {
    constructor() {
        super("Page not found", 404);
    }
};

export default pageNotFoundError;
import invalidRequest from "./invalidRequest.js";

class validationError extends invalidRequest{
    constructor(error) {
        const errorMsg = Object.values(error.errors)
            .map(error => error.message)
            .join("; ");
    
        super(`Validation error: ${errorMsg}`);
    }
}

export default validationError;
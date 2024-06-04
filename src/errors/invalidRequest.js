import baseError from "./baseError.js";

class invalidRequest extends baseError {
    constructor(msg = "Invalid request format") {
        super(msg, 400);
    }
}

export default invalidRequest;
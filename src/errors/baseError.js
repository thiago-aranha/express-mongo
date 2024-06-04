class baseError extends Error {
    constructor (msg = "Server internal error", stt = 500) {
        super();
        this.message = msg;
        this.status = stt;
    }

    sendResponse(res) {
        res.status(this.status).send({
            message: this.message,
            status: this.status
        });
    }

}

export default baseError;
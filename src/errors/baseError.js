class baseError extends Error {
    constructor(msg = "Server internal error", stt = 500) {
        super(msg);
        this.status = stt;
    }

    sendResponse(res) {
        res.status(this.status).json({
            message: this.message,
            status: this.status
        });
    }
}

export default baseError;
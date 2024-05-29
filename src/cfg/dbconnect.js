import mongoose from "mongoose";

async function connectLibraryDatabase() {
    mongoose.connect("mongodb+srv://admin:admin@cluster0.ixdwmfq.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
};

export default connectLibraryDatabase;
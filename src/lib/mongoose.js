import mongoose from 'mongoose';
async function connectToDatabase() {
    const MONGODB_URI = process?.env?.MONGODB_URI;
    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable inside .env");
    }
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to the mongoDB atlas cloud.");
    }
    catch(e) {
        console.error("Couldn't connect to the mongoDB atlas cloud. ", e);
    }
}
export default connectToDatabase;

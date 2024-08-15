import mongoose from 'mongoose';
async function connectToDatabase() {
    try {
        const MONGODB_URI = process?.env?.MONGODB_URI;
        await mongoose.connect(MONGODB_URI);
        console.log("Connected to the mongoDB atlas cloud.");
    }
    catch(e) {
        console.error("Couldn't connect to the mongoDB atlas cloud. ", e);
    }
}
export default connectToDatabase;

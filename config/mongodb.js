import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.once("connected", () => {
        console.log("Connected to MongoDB 🎄🎁 Let's Start ✨");
    });
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`);
};

export default connectDB;
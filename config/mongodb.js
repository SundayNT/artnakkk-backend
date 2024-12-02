import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.once("connected", () => {
        console.log("Connected to MongoDB 🎄🎁 Let's Start ✨");
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
};

export default connectDB;
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import mongoose from "mongoose";

// Create db connection with function
export const connectDB = () => {
    const connection = mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    mongoose.connection.on("error", (err) => {
        console.error(`Mongoose connection error: ${err}`);
        process.exit(1);
    }
    );

    mongoose.connection.on("connected", () => {
        console.info("Mongoose connected successfully");
    }
    );

    mongoose.connection.on("disconnected", () => {
        console.info("Mongoose disconnected");
    }
    );

};

export default connectDB;
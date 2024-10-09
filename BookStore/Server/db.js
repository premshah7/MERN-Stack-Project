import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

function Connection(){
    mongoose.connect("mongodb+srv://Prem_7:Prem%40123@cluster0.2zd61.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Connected to MongoDB")
        })
        .catch(err => {
            console.error("Error connecting to MongoDB:", err)
        })
}

export default Connection
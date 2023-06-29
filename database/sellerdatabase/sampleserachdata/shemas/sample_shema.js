import mongoose, { Schema } from "mongoose";


const Sample_create = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    age: {
        type: Number,
        required: [true, "Age is Required"]
    },
   
}, {
    timestamps: true
})


export default mongoose.model("sample", Sample_create);
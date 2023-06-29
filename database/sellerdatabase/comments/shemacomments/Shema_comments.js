import mongoose, { Schema } from "mongoose";


const CommetsNew = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    samples: {
        type: Schema.Types.ObjectId, ref: "sample"
    }
}, {
    timestamps: true
})


export default mongoose.model("comments", CommetsNew);
import mongoose from "mongoose";


const BikeComments_shema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required"]
    },
    des: {
        type: String,
        required: [true, "Description is Required"]
    },
    bikecomments: {
        type: Schema.Types.ObjectId, ref: "bikeusersnew"
    },

}, {
    timestamps: true
});

export default mongoose.model("bikecomments", BikeComments_shema);
import mongoose, { Schema } from "mongoose";


const BikeCreateShema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Is Required"]
    },
    shopname: {
        type: String,
        required: [true, "Shop Name Is Required"]
    },
    users: {
        type: Schema.Types.ObjectId, ref: "bikeusersnew"
    }
}, {
    timestamps: true
})


export default mongoose.model("bikecreateshop", BikeCreateShema);
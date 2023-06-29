import mongoose from "mongoose";



const BikeNewUsers = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]
    },
    email: {
        type: String,
        required: [true, "Email Is Required"]
    }
}, {
    timestamps: true
})


export default mongoose.model('bikeusersnew', BikeNewUsers)


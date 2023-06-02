import mongoose from "mongoose";



const subscribeShema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    planName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    limitshopcount: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    })


    export default mongoose.model("subscribeadmin",subscribeShema);
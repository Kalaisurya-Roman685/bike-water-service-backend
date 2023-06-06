import mongoose from "mongoose";



const SellerWorkers = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    workName: {
        type: String,
        required: true
    },
    contactNo: {
        type: String,
        required: true
    },
    workeremail: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
        min: 50,
        max: 60
    },
    alternateContactno: {
        type: String,
        required: true
    },
    bankname: {
        type: String,
        required: true
    },
    location: {
        type: String, required: true
    },
    familyMembers: {
        type: String,
        required: true
    },
    workingType: {
        type: Array,
        default: []
    },
    accountno: {
        type: String,
        required: true
    }
},
    {
        timestamps: true
    })

export default mongoose.model("Sellerworkers", SellerWorkers);
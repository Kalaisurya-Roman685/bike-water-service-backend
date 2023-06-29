import mongoose from "mongoose";


const SellerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    approvalstatus: {
        type: Number,
        default: 1
    },
    instagramurl: {
        type: String
    },
    youtubeurl: {
        type: String
    },
    bankingdetails: {
        type: String,
    },
    contactno: {
        type: String,
    },
    altternateContactno: {
        type: String,
    },
    profiledescription: {
        type: String,
    },
    pincode: {
        type: String,
    },
    state: {
        type: String,
    },
    country: {
        type: String,
    },
    location: {
        type: String
    },
    houseno: {
        type: Number
    },
    bankname: {
        type: String,
    },
    accountno: {
        type: String,
    },
    ifccode: {
        type: String
    },
    branchname: {
        type: String
    },
    subscribeName: {
        type: String
    },
    streetaddress:{
        type:String
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


export default mongoose.model("sellerauth", SellerSchema);
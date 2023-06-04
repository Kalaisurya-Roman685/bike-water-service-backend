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
    address: {
        type: String
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
    location: {
        type: String
    },
    workers: [
        {
            workName: {
                type: String,
                required: true
            },
            contactNo: {
                type: String,
                required: true
            },
            email: {
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
                type: Array,
                required: true
            }

        }
    ]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})


export default mongoose.model("sellerauth", SellerSchema);
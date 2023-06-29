import mongoose from "mongoose";



const BikeShema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    shoepname: {
        type: String,
        required: true
    },
    categoryname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    BikeType: {
        type: String,
        required: true
    },
    approvalbikestatus: {
        type: Number,
        default: 1
    }

},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }

    })


export default mongoose.model('Bikeusers', BikeShema);
import mongoose from "mongoose";


const Categorycreate = new mongoose.Schema({
    categoryname: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
},
    {
        timestamps: {
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    })

export default mongoose.model("Categorys", Categorycreate);
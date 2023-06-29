import bikecreateoneshema from "../bikecreatoneshema/bikecreateoneshema.js";


export const BikeCreatenewone = async (req, res) => {


    try {


        const datasnew = {
            title: req.body.title,
            shopname: req.body.shopname,
            users: req.body.userid

        }
        const datas = await bikecreateoneshema.create(datasnew);
        res.status(201).json(datas);
    }
    catch (err) {
        console.log(err);
    }
}


// get 


export const getBikeCreate = async (req, res) => {


    try {

        const datas = await bikecreateoneshema.find().populate("users");
        res.status(200).json(datas);
    }
    catch (err) {
        console.log(err);
    }
}
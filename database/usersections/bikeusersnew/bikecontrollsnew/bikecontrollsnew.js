import bikecontrollshema from "../bikecontrollschema/bikecontrollshema.js";


export const createBikeuser = async (req, res) => {

    try {
        const form = await bikecontrollshema.create(req.body);
        res.status(201).json(form);
    }
    catch (err) {
        res.status(401).json("Create Bike Erro")
    }
}


// get users bike

export const getBikeuser = async (req, res) => {


    try {
        const form = await bikecontrollshema.find();
        res.status(200).json(form);
    }
    catch (err) {
        res.status(401).json("Create Bike Erro")
    }
}
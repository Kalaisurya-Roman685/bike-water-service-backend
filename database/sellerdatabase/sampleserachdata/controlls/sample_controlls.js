

// create samples

import sample_shema from "../shemas/sample_shema.js";


export const Createsample = async (req, res, next) => {

    const datas = req.body;
    try {

        await sample_shema.create(datas);

        res.status(201).json("Create sample");
    }
    catch (err) {
        res.status(500).json("Internal server error");
    }
}

// get all samples


export const getallSamples = async (req, res, next) => {


    try {


        let match = {};

        if (req.query.search) {
            match.name = req.query.search

        } 

        // if (req.query.age) { 
        //     match.age = new RegExp(req.query.age);
        //     console.log(match)
        // }

        // if (req.query.search) {
        //     match.age = parseInt(req.query.search);
        // }

        if (req.query.search) {
            const forms = await sample_shema.aggregate([{
                $match: match
            }]);

            res.status(200).json(forms);
        }

        else {
            const forms = await sample_shema.find().populate("comments");

            res.status(200).json(forms);
        }


    }
    catch (err) {
        res.status(500).json("Internal server error");
    }
}
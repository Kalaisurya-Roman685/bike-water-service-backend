import bike_schema from "../bikeschemas/bike_schema.js";



// create shop
export const BikeCreate = async (req, res) => {

    const {
        userId,
        shoepname,
        categoryname,
        price,
        place,
        BikeType
    } = req.body;
    try {
        const CreateBikesshop = await bike_schema({
            userId,
            shoepname,
            categoryname,
            price,
            place,
            BikeType
        })

        if (userId === req.userId) {
            await CreateBikesshop.save().then((data) => {

                res.status(201).json(data);

            }).catch((err) => {
                res.status(404).json(err);

            })
        }
        else {
            res.status(404).json("Unauthorized User or User id Not Matched")
        }
    }
    catch (err) {

    }
}

// edit shop

export const BikeEdit = async (req, res) => {


    try {


        if (req.body.userId === req.userId) {

            await bike_schema.findByIdAndUpdate(req.body.bikeid,
                {
                    userId: req.body.userId,
                    shoepname: req.body.shoepname,
                    categoryname: req.body.categoryname,
                    price: req.body.price,
                    place: req.body.place,
                    BikeType: req.body.BikeType,
                    approvalbikestatus: false
                }
                , { new: true }).then((data) => {

                    res.status(201).json("Bike Shop Updated");

                }).catch((err) => {
                    res.status(404).json(err);

                })
        }
        else {
            res.status(404).json("Unauthorized User or User id Not Matched")
        }
    }
    catch (err) {

    }
}

// get all shops

export const BikeAllshops = async (req, res) => {


    try {


        if (req.body.userId === req.userId) {

            await bike_schema.find().then((data) => {

                res.status(201).json(data);

            }).catch((err) => {
                res.status(404).json(err);

            })
        }
        else {
            res.status(404).json("Unauthorized User or User id Not Matched")
        }
    }
    catch (err) {

    }
}
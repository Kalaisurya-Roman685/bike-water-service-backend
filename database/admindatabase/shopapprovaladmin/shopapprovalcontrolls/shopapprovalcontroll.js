import bike_schema from "../../../sellerdatabase/createbikedatabase/bikeschemas/bike_schema.js";



export const ApprovalShopadmin = async (req, res) => {
    try {

        if (req.body.shopid) {
            if (req.body.userId === req.userId) {
                await bike_schema.findByIdAndUpdate(req.body.shopid, {
                    approvalbikestatus: true
                }, {
                    new: true
                }).then((data) => {
                    res.status(200).json("Shop Approval Successfully");
                }).catch((err) => {
                    res.status(404).json(err);
                })
            }
            else {
                res.status(404).json("Unauthorized User or User Id Not Matched");

            }
        }
        else {
            res.status(404).json("Shop Id Not Matched");

        }

    }
    catch (err) {
        res.status(404).json(err);
    }
}


export const RejectShopadmin = async (req, res) => {
    try {

        if (req.body.shopid) {
            if (req.body.userId === req.userId) {
                await bike_schema.findByIdAndUpdate(req.body.shopid, {
                    approvalbikestatus: false
                }, {
                    new: true
                }).then((data) => {
                    res.status(200).json("Shop Rejected Successfully");
                }).catch((err) => {
                    res.status(404).json(err);
                })
            }
            else {
                res.status(404).json("Unauthorized User or User Id Not Matched");

            }
        }
        else {
            res.status(404).json("Shop Id Not Matched");

        }

    }
    catch (err) {
        res.status(404).json(err);
    }
}

// all shops



export const AllShopadmin = async (req, res) => {
    try {

        if (req.body.userId === req.userId) {
            await bike_schema.find().then((data) => {
                res.status(200).json(data);
            }).catch((err) => {

            })
        }
        else {
            res.status(404).json("Unauthorized User or User Id Not Matched");

        }
    }
    catch (err) {
        res.status(404).json(err);
    }
}
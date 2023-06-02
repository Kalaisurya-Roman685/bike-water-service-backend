import subscribe_shema from "../subscribemodels/subscribe_shema.js";


// create subscribe
export const createSubscribe = async (req, res) => {
    const { planName,
        price,
        description,
        limitshopcount, userId } = req.body;
    try {
        if (userId === req.userId) {
            const createsubscribe = await subscribe_shema({
                planName,
                price,
                description,
                limitshopcount, userId
            })
            await createSubscribe.save().then((data) => {
                res.status(201).json(data);
            }).catch((err) => {
                res.status(404).json(err);
            })
        }
        else {
            res.status(404).json("Unauthorized User or User Id Not Matched")
        }
    }
    catch (err) {

    }
}


// edit subscribe

export const editSubscribe = async (req, res) => {
    const { userId, subscribeid } = req.body;
    try {
        if (userId === req.userId) {
            const createsubscribe = await subscribe_shema.findByIdAndUpdate(subscribeid, req.body, { new: true }).then((data) => {
                res.status(201).json("Subscribe Plan Updated");
            }).catch((err) => {
                res.status(404).json(err);
            })
        }
        else {
            res.status(404).json("Unauthorized User or User Id Not Matched")
        }
    }
    catch (err) {

    }
}

// delete 

export const deleteSubscribe = async (req, res) => {
    const { userId, subscribeid } = req.body;
    try {
        if (userId === req.userId) {
            const createsubscribe = await subscribe_shema.findByIdAndDelete(subscribeid).then((data) => {
                res.status(201).json("Subscribe Plan Deleted");
            }).catch((err) => {
                res.status(404).json(err);
            })
        }
        else {
            res.status(404).json("Unauthorized User or User Id Not Matched")
        }
    }
    catch (err) {

    }
}
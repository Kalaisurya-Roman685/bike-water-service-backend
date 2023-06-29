import seller_worker_shema from "../sellerworkermodel/seller_worker_shema.js"

export const Allworkers = async (req, res) => {

    const { workName,
        contactNo,
        workeremail,
        gender,
        address,
        alternateContactno,
        bankname,
        location,
        familyMembers,
        userId,
        accountno, workingType } = req.body;



    try {

        const createworkers = await seller_worker_shema({
            workName,
            contactNo,
            workeremail,
            gender,
            address,
            alternateContactno,
            bankname,
            location,
            familyMembers,
            accountno,
            userId, workingType
        });


        console.log("req.userId", req.userId)

        if (userId === req.userId) {
            await createworkers.save().then((data) => {
                res.status(200).json("Crate Workers")

            }).catch((err) => {
                res.status(404).json("Error This Page")

            })
        }
        else {
            res.status(404).json("Unauthorized User");
        }

    }
    catch (err) {
        res.status(404).json("Worker Error")

    }
}

// edit
export const Editworkers = async (req, res) => {

    try {


        if (req.body.userId === req.userId) {
            const update = await seller_worker_shema.findByIdAndUpdate(req.body.workerid, req.body, { new: true }).then((data) => {
                res.status(200).json("Updated Workers")

            }).catch((err) => {
                res.status(404).json("Error This Page")

            })
        }
        else {
            res.status(404).json("Unauthorized User");
        }
    }
    catch (err) {
        res.status(404).json("Worker Error")

    }
}


// delete


export const Deleteworkers = async (req, res) => {

    try {

        console.log(req.userId,"req.userId")

        console.log(req.body.userId,"req.body.userId")


        if (req.body.userId === req.userId) {
            const update = await seller_worker_shema.findByIdAndDelete(req.body.workerid).then((data) => {
                res.status(200).json("Deleted Workers")

            }).catch((err) => {
                res.status(404).json("Error This Page")

            })
        }
        else {
            res.status(404).json("Unauthorized User");
        }
    }
    catch (err) {
        res.status(404).json("Worker Error")

    }
}


// single data

export const Singleworkers = async (req, res) => {

    try {


        if (req.body.userId === req.userId) {
            const update = await seller_worker_shema.findById(req.body.workerid).then((data) => {
                res.status(200).json(data)

            }).catch((err) => {
                res.status(404).json("Error This Page")

            })
        }
        else {
            res.status(404).json("Unauthorized User");
        }
    }
    catch (err) {
        res.status(404).json("Worker Error")

    }
}

// all workers

export const Allworkerslist = async (req, res) => {

    console.log("res.body", req.body.userId)
    try {


        if (req.body.userId === req.userId) {
            const update = await seller_worker_shema.find().then((data) => {
                res.status(200).json(data)

            }).catch((err) => {
                res.status(404).json("Error This Page")

            })
        }
        else {
            res.status(404).json("Unauthorized User");
        }
    }
    catch (err) {
        res.status(404).json("Worker Error")

    }
}

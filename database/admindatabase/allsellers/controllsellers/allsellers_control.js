import seller_schema from "../../../auth/sellerauth/sellermodel/seller_schema.js"

export const AllSellerslist = async (req, res) => {

    console.log(req.body.userId, "kla")
    try {

        if (req.body.userId === req.userId) {
            const allserllsers = await seller_schema.find().then((data) => {
                res.status(200).json(data);
            }).catch((err) => {
                res.status(404).json(err)

            })
        }
        else {
            res.status(404).json("Unauthorized User or User Id Not Matched")

        }

    }
    catch (err) {
        res.status(404).json("User Not Founds")
    }
}


// admin approval status seller


export const AdminApprovalseller = async (req, res) => {
    try {

        if (req.body.userId == req.userId) {

            await seller_schema.findByIdAndUpdate(req.body.sellerid, { approvalstatus: 2 }, { new: true }).then((data) => {
                res.status(200).json("Seller Approval Successfully");
            }).catch((err) => {
                res.status(404).json(err)

            })

        }
        else {
            res.status(404).json("Unauthorized User or User Id Not Matched")

        }

    }
    catch (err) {
        res.status(404).json("User Not Founds")
    }
}


export const AdminApprovalRejectseller = async (req, res) => {
    try {

        if (req.body.userId == req.userId) {

            await seller_schema.findByIdAndUpdate(req.body.sellerid, { approvalstatus: 3 }, { new: true }).then((data) => {
                res.status(200).json("Seller Rejected Successfully");
            }).catch((err) => {
                res.status(404).json(err)

            })

        }
        else {
            res.status(404).json("Unauthorized User or User Id Not Matched")

        }

    }
    catch (err) {
        res.status(404).json("User Not Founds")
    }
}
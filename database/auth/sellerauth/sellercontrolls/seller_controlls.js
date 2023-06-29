import { PasswordCheck, PasswordCreate } from "../../../../middleware/passwordbcrpt/PasswordGenrate.js";
import { Tokengenrate } from "../../../../middleware/tokengenrate/TokenCreate.js";
import seller_schema from "../sellermodel/seller_schema.js";

export const SellerRegister = async (req, res) => {

    const { username, email, password, role, contactno, workers } = req.body;
    try {

        const existemail = await seller_schema.findOne({ email });
        if (existemail) {
            return res.status(404).json("Email Already Exist");
        }
        const hashed = await PasswordCreate(password);
        const createUser = await seller_schema({
            username,
            email,
            password: hashed,
            role: "seller",
            contactno,
            workers
        })

        await createUser.save();
        res.status(201).json(createUser)
    }
    catch (err) {
        res.status(404).json("Register Error in Seller");
    }

}



export const SellerLogin = async (req, res) => {
    const { email, password } = req.body;
    try {



        const existemail = await seller_schema.findOne({ email });
        if (existemail) {
            const hashed = await PasswordCheck(password, existemail?.password);
            if (hashed) {
                const Tokens = await Tokengenrate(existemail?._id)
                const { password, ...otherdetails } = existemail._doc;
                const response = {
                    token: Tokens,
                    seller: otherdetails
                }
                res.status(200).json(response)
            }
            else {
                res.status(404).json("Password Not Matched")
            }
        }
        else {
            return res.status(404).json("User Not Found");
        }
    }
    catch (err) {
        res.status(404).json("Login Error")
    }

}




// user profile update


export const SellerProfileUpdate = async (req, res) => {
    const {
        username,
        email,
        password,
        role,
        approvalstatus,
        instagramurl,
        youtubeurl,
        bankingdetails,
        contactno,
        altternateContactno,
        profiledescription,
        pincode,
        state,
        country,
        location,
        houseno,
        bankname,
        accountno,
        ifccode,
        branchname,
        subscribeName
    } = req.body;

    try {

        if (req.body.userId === req.userId) {

            const updateprofile = await seller_schema.findByIdAndUpdate(req.body.userId, req.body, { new: true }).then((data) => {
                res.status(200).json("Onbaord completed")
            }).catch((err) => {
                res.status(404).json(err)

            })
        }
    }
    catch (err) {
        res.status(404).json("Onboard user Error")

    }
}

// get profile

export const SellerProfileget = async (req, res) => {
    const {
        username,
        email,
        password,
        role,
        approvalstatus,
        instagramurl,
        youtubeurl,
        bankingdetails,
        contactno,
        altternateContactno,
        profiledescription,
        pincode,
        state,
        country,
        location,
        houseno,
        bankname,
        accountno,
        ifccode,
        branchname,
        subscribeName
    } = req.body;



    try {

        // if (req.body.userId === req.userId) {
        const updateprofile = await seller_schema.findById(req.body.userId).then((data) => {
            res.status(200).json(data)
        }).catch((err) => {
            res.status(404).json(err)

        })
        // }
    }
    catch (err) {
        res.status(404).json("Onboard user Error")

    }
}


import { PasswordCheck, PasswordCreate } from "../../../../middleware/passwordbcrpt/PasswordGenrate.js";
import { Tokengenrate } from "../../../../middleware/tokengenrate/TokenCreate.js";
import admin_shema from "../adminmodels/admin_shema.js";

export const AdminRegister = async (req, res) => {

    const { username, email, password, role, adminstatus } = req.body;
    try {

        const existemail = await admin_shema.findOne({ email });
        if (existemail) {
            return res.status(404).json("Email Already Exist");
        }
        const hashed = await PasswordCreate(password);
        const createUser = await admin_shema({
            username,
            email,
            password: hashed,
            role: "admin",
            adminstatus
        })

        await createUser.save();
        res.status(201).json(createUser)
    }
    catch (err) {
        res.status(404).json("Register Error in Admin");
    }

}



export const AdminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {



        const existemail = await admin_shema.findOne({ email });
        if (existemail) {
            const hashed = await PasswordCheck(password, existemail?.password);
            if (hashed) {

                if (email == "kalai@gmail.com" && password == "kalai123" || hashed) {
                    const Tokens = await Tokengenrate(existemail?._id)
                    const { password, ...otherdetails } = existemail._doc;
                    const response = {
                        token: Tokens,
                        admin: otherdetails
                    }
                    res.status(200).json(response)
                }
                else {
                    res.status(404).json("Password Not Matched")

                }

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
        res.status(404).json("Register Error")
    }

}





import Shema_comments from "../shemacomments/Shema_comments.js";

export const createComment = async (req, res) => {

    const datas = req.body;
    try {

        const filesss = await Shema_comments.create(datas);

        await filesss.save();
        res.status(201).json(filesss);

    }
    catch (err) {
        console.log(err);
    }
}

export const getcomments = async (req, res) => {


    try {

        const filesss = await Shema_comments.findById({ _id: req.body.sampleid }).populate("samples");


        res.status(200).json(filesss);

    }
    catch (err) {
        console.log(err);
    }
}
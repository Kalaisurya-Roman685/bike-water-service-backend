import category_schema from "../categoryschema/category_schema.js";


// create category
export const Createcategory = async (req, res) => {

    const { categoryname, userId } = req.body;
    try {

        const createcategorynew = await category_schema({
            categoryname,
            userId
        });

        // const { userId, ...othersdata } = createcategorynew?._doc;
        if (userId === req.userId) {
            await createcategorynew.save().then((data) => {
                res.status(404).json(data);

            }).catch((err) => {
                res.status(404).json(err);
            })
        }
        else {
            res.status(404).json("UnAuthorized User or User Id Missing");
        }
    }
    catch (err) {
        res.status(404).json("Category Not Found");
    }
}

// edit

export const Editcategory = async (req, res) => {

    const { categoryid } = req.body;
    try {
        // const { userId, ...othersdata } = createcategorynew?._doc;
        if (categoryid) {
            if (req.body.userId === req.userId) {
                const createcategorynew = await category_schema.findByIdAndUpdate(categoryid, req.body, {
                    createdAt: new Date(0),
                    updatedAt: new Date(0),

                }, {
                    new: true
                }).then((data) => {
                    res.status(404).json("Category Updated");

                }).catch((err) => {
                    res.status(404).json(err);
                })
            }
            else {
                res.status(404).json("UnAuthorized User or User Id Missing");
            }
        }
        else {
            res.status(404).json("CtaegoryId is Missing");

        }

    }
    catch (err) {
        res.status(404).json("Category Not Found");
    }
}


// delete category


export const Deletecategory = async (req, res) => {

    const { categoryid } = req.body;
    try {

        if (categoryid) {
            if (req.body.userId === req.userId) {
                const createcategorynew = await category_schema.findByIdAndDelete(categoryid).then((data) => {
                    res.status(404).json("Category Deleted Successfull");

                }).catch((err) => {
                    res.status(404).json(err);
                })
            }
            else {
                res.status(404).json("UnAuthorized User or User Id Missing");
            }
        }
        else {
            res.status(404).json("CtaegoryId is Missing");

        }

    }
    catch (err) {
        res.status(404).json("Category Not Found");
    }
}


// get all categorys

export const Getallcategory = async (req, res) => {
    try {
        if (req.body.userId === req.userId) {
            const createcategorynew = await category_schema.find().then((data) => {
                res.status(404).json(data);

            }).catch((err) => {
                res.status(404).json(err);
            })
        }
        else {
            res.status(404).json("UnAuthorized User or User Id Missing");
        }
    }

    catch (err) {
        res.status(404).json("Category Not Found");
    }
}
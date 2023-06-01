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

    const id = req.body.categoryid;


    try {



        // const { userId, ...othersdata } = createcategorynew?._doc;
        if (req.body.userId === req.userId) {

            const createcategorynew = await category_schema.findByIdAndUpdate(id, {
                categoryname,

            }, {
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
    catch (err) {
        res.status(404).json("Category Not Found");
    }
}
const User = require("../models/User");

exports.createUser = async (req , res) => {
    try{
        const user = await User.create(req.body);
        res.json(user);
    }
    catch (err){
        res.status(400).json({
            error : err.message
        });
    }
};

exports.getUsers = async (req , res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.updateUser = async (req , res) => {
    try {
        delete req.body._id; // prevent changing ID

         const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true}
         );

         if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
         res.json(user)
    } catch (err) {
        res.status(400).json({error : err.message});
    }
};
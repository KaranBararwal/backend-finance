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
    const users = await User.find();
    res.json(users);
}

exports.updateUsers = async (req , res) => {
    try {
         const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new : true}
         );

         res.json(user)
    } catch (err) {
        res.status(400).json({error : err.message});
    }
};
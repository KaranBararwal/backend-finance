module.exports = (roles) => {
    return (req , res , next) => {
        const userRole = req.headers.role; // simple mock auth

        // check if role header is missing
        if (!userRole) {
            return res.status(401).json({
                message: "Role header missing"
            });
        }

        // checking the permission
        if(!roles.includes(userRole)){
            return res.status(403).json( {message : "Access Denied"} );
        }
        next();
    };
};
const router = require("express").Router();
const {createUser, getUsers, updateUsers} = require("../controllers/userController");

router.post("/" , createUser);
router.get("/" , getUsers)
router.put("/:id" , updateUsers)


module.exports = router;                                                                 
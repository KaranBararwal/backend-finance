const router = require("express").Router();
const {createUser, getUsers, updateUser} = require("../controllers/userController");
const auth = require("../middleware/auth");


router.post("/", auth(["admin"]), createUser);
router.get("/", auth(["admin"]), getUsers);
router.put("/:id", auth(["admin"]) , updateUser)

module.exports = router;                                                              
const router = require("express").Router();
const {createRecord , getRecords , getSummary , updateRecord , deleteRecord}  = require("../controllers/recordController");
const auth = require("../middleware/auth");

// CREATE 
router.post("/" , auth(["admin"]) , createRecord);
// READ
router.get("/" , auth(["admin" , "analyst" , "viewer"]) , getRecords);
// SUMMARY
router.get("/summary" , auth(["admin" , "analyst"]) , getSummary);
// UPDATE
router.put("/:id" , auth(["admin"]) , updateRecord);
// DELETE
router.delete("/:id" , auth(["admin"]) , deleteRecord);

module.exports = router;
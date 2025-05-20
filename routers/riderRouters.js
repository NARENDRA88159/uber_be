const express =require("express")
const router = express.Router();
const Rider = require("../Model/rider");
const { riderRegister, riderLogin } = require("../controllers/riderController");

router.post("/register",riderRegister);
router.post("/login",riderLogin);


module.exports = router;

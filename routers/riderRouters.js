const express =require("express")
const router = express.Router();
const Rider = require("../Model/rider");
const { riderRegister, riderLogin, riderProfile } = require("../controllers/riderController");
const { authmMiddlewareforrider } = require("../middelwares/AuthMiddelware");

router.post("/register",riderRegister);
router.post("/login",riderLogin);
router.post("/profile",authmMiddlewareforrider,riderProfile);


module.exports = router;

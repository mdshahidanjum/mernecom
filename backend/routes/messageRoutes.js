const express = require("express");
const sendMessage = require('../controllers/messages/sendMessageController');
const isAuthenticated = require("../middleware/isAuthenticated");
const getMessageController = require("../controllers/messages/getMessageController");

const router = express.Router();

router.post("/send/:id",isAuthenticated,sendMessage)
router.get("/:id",isAuthenticated,getMessageController)


module.exports=router;
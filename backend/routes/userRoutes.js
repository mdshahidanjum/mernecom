const express = require('express');
const register = require('../controllers/userController');
const login = require('../controllers/userLogin');
const logout = require('../controllers/userLogout');
const getOtherUsers = require('../controllers/getOtherUsers');
const isAuthenticated = require('../middleware/isAuthenticated');


const router = express.Router();

router.get("/",isAuthenticated,getOtherUsers)
router.post("/register",register);
router.post("/login",login)
router.get("/logout",logout)





module.exports=router;
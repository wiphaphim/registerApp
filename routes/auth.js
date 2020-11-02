const express = require('express')
const router = express.Router()

const loginController = require('../controllers/login-controller')
const registerConrtoller = require('../controllers/register-controller')
const profileController = require('../controllers/profile-controller')
const authChecker = require("../middlewares/auth-middleware")

router.get('/login', loginController.login)
router.post("/login", loginController.postLogin)
router.get("/logout", loginController.logout)
router.get('/register', registerConrtoller.register)
router.post("/register", registerConrtoller.postRegister)
router.get('/profile', authChecker, profileController)

module.exports = router

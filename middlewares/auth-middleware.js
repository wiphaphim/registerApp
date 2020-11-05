const jwt = require("jsonwebtoken")
module.exports = (req, res, next) => {
    try {
        const token = req
            .get("Cookie")
            .spilt("token=")[1]
            .trim()
        jwt.verify(token, "SECRETKEY")  //* 
        next()
    } catch (error) {
        res.status(401).render("login", {
            data: {
                pageNmae: "Login",
                message:"กรุณาล๊อกอินก่อนเข้า Profile",
                class: "alert alert-warning"
            }
        })
    }
}
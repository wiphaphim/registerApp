const notFound = (req, res, next) => {
    res.render("page-not-found", {
        data:{
            pageName: "error404",
            message:"ขออภัยไม่พบหน้าเพจ",
            class:"alert alert-primary",
            loginStatus: false
        }
        
    })
}
module.exports = notFound
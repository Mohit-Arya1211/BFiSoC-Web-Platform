const express=require("express");
const router=express();
const passport=require("passport");

//auth routes
router.get("/login",(req,res)=>{
    res.render("login",{user:req.user});
});

//auth logout
router.get("/logout",(req,res)=>{
    req.logout();
    res.redirect("/");
})

//auth with google
router.get("/github",passport.authenticate("github",{
    scope:["profile"]
}));

//callback route for google to redirect to
router.get("/github/redirect",passport.authenticate("github"),(req,res)=>{
    res.redirect("/profile/");
})

module.exports=router;
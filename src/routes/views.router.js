import { Router } from "express";

const router = Router(); 

router.get("/login", (req, res) =>{
    if(req.session.user){
        return res.redirect("/profile")
    }
    res.render("login")
})

router.get("/signup", (req, res)=>{
    if(req.session.user){
        return res.redirect("profile")
    }
    res.render("signup")
})

router.get("/profile", (req, res) =>{
    if(!req.session.user){
        return res.redirect("/login")
    }
    console.log(req.session.user)
    res.render("profile", {user: req.session.user})
})

export default router; 
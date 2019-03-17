const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
const flash=require("connect-flash");
const mongoose=require("mongoose");
const passportLocalMongoose=require("passport-local-mongoose");
const methodOverride=require("method-override");
const passport=require("passport");
const LocalStrategy=require("passport-local");
const authRoutes=require("./routes/auth-routes");
const profileRoutes=require("./routes/profile-routes");
const passportSetup=require("./config/passport-setup");
const keys=require("./config/keys");
const cookieSession=require("cookie-session");

const app=express();

//set up view enine
app.set("view engine","ejs");

app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:[keys.session.cookieKey]
}))

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// serve static files
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to mongoose
mongoose.connect(keys.mongodb.dbURI,()=>{
    console.log("connected to mongodb")
});


//setup routes
app.use("/auth",authRoutes);
app.use("/profile",profileRoutes);


app.get("/about",(req,res)=>{
    res.render("about.ejs")
  })
  
app.get("/contact",(req,res)=>{
  res.render("contact.ejs");
})
  
//   app.get("/home",isLoggedIn,(req,res)=>{
//     res.render("index.ejs");
//   });
  
  app.get("/",(req,res)=>{
    res.render("landing.ejs",{user:req.user});  
  });

app.listen(8080,()=>{
    console.log("server started on localhost 8080");
})
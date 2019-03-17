var express=require("express");
var bodyParser=require("body-parser");
var path=require("path");
var flash=require("connect-flash");
var mongoose=require("mongoose");
var passportLocalMongoose=require("passport-local-mongoose");
var methodOverride=require("method-override");
var passport=require("passport");
var LocalStrategy=require("passport-local");

var app=express();

//bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// serve static files
app.use(express.static(__dirname+"/public"));
app.use(methodOverride("_method"));
app.use(flash());

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
    res.render("landing.ejs");  
  });

app.listen(8080,()=>{
    console.log("server started on localhost 8080");
})
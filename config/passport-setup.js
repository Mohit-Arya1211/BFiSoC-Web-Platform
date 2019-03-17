const passport=require("passport");
const GithubStrategy=require("passport-github");
const keys=require("./keys");
const User=require("../models/user-model");

passport.serializeUser((user,done)=>{
  done(null,user.id);
});

passport.deserializeUser((id,done)=>{
  User.findById(id).then((user)=>{
    done(null,user);
  })
});

passport.use(new GithubStrategy({
    //optoion for google strategy
    callbackURL:"/auth/github/redirect",
    clientID:keys.github.clientID,
    clientSecret:keys.github.clientSecret
},(accessToken,refreshToken,profile,done)=>{
  User.findOne({githubId: profile.id}).then((currentUser) => {
    console.log(profile);
    if(currentUser){
        // already have this user
        console.log('user is: ', currentUser);
        done(null,currentUser);
        // do something
    } else {
        // if not, create user in our db
        User.create({githubId:profile.id,username:profile.displayName},(err,newUser)=>{
          if(err){
            console.log(err);
          }
          else{
            console.log("created new user", newUser);
            done(null,newUser);
          }
        })
    }
});
})
);
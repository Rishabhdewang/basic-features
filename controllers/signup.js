const { Model } = require('objection')
const knex = require("knex");
const validator  = require('validator');
const user = require('../models/usermodel')
const bcrypt = require("bcrypt")


const signup = async(req,res) => {

    const  username  = req.body.Username;
    const email = req.body.Email;
    const password  = req.body.Password;

    if( validator.isEmail(email || ""))
        return res.send("Enter a valid email address");

    let emailfound = await user.query().where("Email",email).first();
    if(emailfound){
        return res.send("Email already exists");
    }
    
    if(password === "") return res.send("Enter password");
    
    if(username === "") return res.send("enter user name ");
    console.log (username, email ,password)

    let userfound = await user.query().where("Username",username).first();
    if(userfound){
        return res.send("usename already exists");
    }
    // if(notfound) console.log(notfound);
 
    const hashedpassword = await bcrypt.hash(password,10);

    const  result = await user.query().insert({
        Email : email ,
        Username : username,
        Password : hashedpassword
    })

    res.send(result);
}

module.exports = signup;
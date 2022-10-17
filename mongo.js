const mongoose = require('mongoose');
const path= require('path');
let Schema = mongoose.Schema;
let schema = new Schema({
   "email" : String,
   "pass" : String,
})

let User;
function initialize(){
    let db=mongoose.createConnection("mongodb+srv://Raju:EoTmMMO1wpcQOjfY@cluster0.8vfvp83.mongodb.net/test")
    return new Promise((resolve,reject)=>{

        db.on('error',(err)=>{
            console.log("Error is: ",err)
            reject()
        })

        db.once('open',()=>{
            User=db.model("users",schema)
            console.log("User Schema Created");
            resolve();
        })
    })
}

function Registeruser(userdata){
    console.log(userdata)
    initialize().then(()=>{
        let user1=new User(userdata)
        console.log(user1)
        user1.save((err)=>{
            if(err){
                console.log("user is already present")
            }
            else if(err){
                console.log("error in creating user")
            }
        })
    })
}

function getUser(Email,pass){
    return new Promise((resolve,reject)=>{
        initialize().then(()=>{
            User.find({email:Email}).exec().then((data)=>{
                    if(data[0].password=pass){
                        resolve(true)
                    }
            })
            .catch((err)=>{
                reject(err)
            })
        })
    })
}

module.exports={Registeruser,getUser}
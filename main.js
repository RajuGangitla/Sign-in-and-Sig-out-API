const mongoFile=require("C:\\Users\\DAVID\\Desktop\\Assignment\\mongo.js")
const fs=require('fs')
const path =require('path')
let login=false


function isRegister(data){
     mongoFile.Registeruser(data)
}

function isMain(email,pass){
    login=true
    return mongoFile.getUser(email,pass)
}

function isUserLoggedIn(){
    console.log("Login value is:",login)
    return login;
}

function logout(){
    login=false;
}
module.exports={isRegister,isMain,isUserLoggedIn,logout}
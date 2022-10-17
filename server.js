const express =require('express')
const bodyParser = require('body-parser')
const main=require('C:\\Users\\DAVID\\Desktop\\Assignment\\main.js')
const path = require('path')

let app=express()
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/register',function(req,res){
    res.render(path.join(__dirname,"//layouts//register.hbs"))
})

app.post('/register',function(req,res){
    main.isRegister(req.body)
    res.render(path.join(__dirname,"//layouts//login.hbs"))
})

app.get('/',function(req,res){
    res.render(path.join(__dirname,"//layouts//login.hbs"))
})


app.post("/",function(req,res){
    main.isMain(req.body.email,req.body.pass).then((data)=>{
        console.log("user is authorised")
        res.render(path.join(__dirname,"//layouts//afterlogin.hbs"))
    }).catch((err)=>{
        console.log("not authorised",err)
        res.render(path.join(__dirname,"//layouts//404.hbs"))
    })
})

app.get('/logout',function(req,res){
        main.logout();
        res.redirect('/')
})
app.listen(8081)
console.log("server started")
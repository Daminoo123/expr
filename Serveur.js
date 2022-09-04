const express = require("express")
const app = express()
const port = 6500 
const test = require('./midleware/test')
app.use(express.static('public'))
app.use('/style',express.static(__dirname+'/style'))

app.set('view','./view');
app.set('view engine','pug');

app.use(test)
app.get("/Acceuil",(req,res)=>{
    res.sendFile(__dirname+"/view/Acceuil.html")
})
app.get("/Service",(req,res)=>{
    res.sendFile(__dirname+"/view/Service.html")
})
app.get("/Contact",(req,res)=>{
    res.sendFile(__dirname+"/view/Contact.html")
})

app.listen(port,err=>err? console.log('err'):console.log('serveur is running on port '+port))

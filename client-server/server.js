const express = require('express')

var app = express()

const bodyparser=require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.get('/', (req, res)=>{
  res.send("This is homepage api")
})

app.get('/usernames', (req, res)=>{
  var usernames=['shruti', 'shrey', 'ram']
  res.send(usernames)
})

app.post('/login', (req, res)=>{
  var username = req.body.username
  var password = req.body.password

  if(username == "javascript" && password == "nodejs"){
    res.send("Login successful")
  }
  else{
    res.send("Login failed")
  }

})
app.listen(3000, ()=>{
  console.log('server started')
})
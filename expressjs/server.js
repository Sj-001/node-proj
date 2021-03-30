const express=require('express')

const app = express()

app.get('/', function(req, res){
  res.end('This is home page')
})

app.get('/users', function(req, res){
  res.end('This is about users')
})

app.listen(3000, function(){
  console.log('connection successful')
})
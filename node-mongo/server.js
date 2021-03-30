const express=require('express')
const mongoose=require('mongoose')
const app = express()
const bodyparser=require('body-parser')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
mongoose.connect('mongodb://localhost:27017/sports', 
{useNewUrlParser: true, useUnifiedTopology: true}, function(err){
  if(err){
    console.log(err)
  }
  else{
    console.log('MongoDB connection successful')
  }
})

const GameModel = mongoose.model('games', {name:String, country:String, player:String})

app.post('/addgame', (req, res)=>{
  var name=req.body.name
  var country=req.body.country
  var player=req.body.player

  var newgame= new GameModel({name:name, country:country, player:player})

  newgame.save(function(err){
    if(err){
      res.send("Failed to add the game")
    }
    else{
      res.send("Game added successfuly")
    }
  })

})
app.post('/deletegame', (req, res)=>{
  GameModel.findOneAndDelete({name:req.body.name}, (err)=>{
    if(err){
      res.send("Something went wrong")
    }
    else{
      res.send("Document deleted successfully")
    }
  })
})
app.post('/getgames', (req, res)=>{
  GameModel.find({}, function(err, documents){
    if(err){
      res.send("Something went wrong")
    }
    else{
      res.send(documents)
    }
  })
})
app.post('/updategame', (req, res)=>{
  GameModel.findOneAndUpdate({name: req.body.name}, {name:req.body.newname}, (err)=>{
    if(err){
      res.send("Something went wrong")
    }
    else{
      res.send("Document updated successfully")
    }
  })
})
app.listen(3000, () =>{
  console.log('Server started')
})
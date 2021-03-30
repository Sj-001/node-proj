const http= require('http')

const dbinfo= require('./dbinfo')

http.createServer(function(req, res){
  if(req.url === '/'){
    res.end('The database username is ' + dbinfo.username)
  }
}).listen(3000)
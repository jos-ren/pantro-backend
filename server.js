// import express framework 
const express = require('express') 

// connect backend database 
const database = require('./mysqlDatabase.js')

// create an object to define all routes 
const app = express() 

app.use('/', function(req, res, next) {
  //var allowedOrigins = ['http://localhost:3000', 'http://localhost:6006', "https://*"];
  var origin = req.headers.origin;
  //console.log(origin);
  /*if(allowedOrigins.indexOf(origin) > -1){
  }*/

  res.setHeader('Access-Control-Allow-Origin', origin || "*");
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// for express endpoints to receive HTTP body data
app.use(express.json())

// GETS ALL ITEMS 

//  ------ GET -----
app.get('/api/Item', (req, res) =>{
  database.allItems((error, Item) => {
    // 2
  if (error) {
    res.send({error})
    return
  }
    // 3
  res.send({Item})
})
})

//  ------ LISTEN ON PORT ------
  
const port = process.env.PORT || 3306
app.listen(port,() => {
  console.log(`listening on port ${port}`)
})
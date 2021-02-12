const express = require('express') 
const database = require('./mysqlDatabase.js')

const app = express() 
app.use(express.json())

// app.use('/', function(req, res, next) {
//   //var allowedOrigins = ['http://localhost:3000', 'http://localhost:6006', "https://*"];
//   var origin = req.headers.origin;
//   //console.log(origin);
//   /*if(allowedOrigins.indexOf(origin) > -1){
//   }*/

//   res.setHeader('Access-Control-Allow-Origin', origin || "*");
//   // Request methods you wish to allow
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
//   // Request headers you wish to allow
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
//   // Set to true if you need the website to include cookies in the requests sent
//   // to the API (e.g. in case you use sessions)
//   res.setHeader('Access-Control-Allow-Credentials', true);
//   next();
// });

let tasks = [
  {
    id: 1,
    content: "Make vanilla pudding",
    completed: false
  },
  {
    id: 2,
    content: "Put in mayo jar",
    completed: false
  },
  {
    id: 3,
    content: "Eat in public",
    completed: false
  }
]

app.get('/api/Item', (req, res) => {
  // 1
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

app.listen(8080, () => {
  console.log("The server is listening on port 8080 :)")
})

app.post('/api/items', (req, res) => {
  const task = req.body
  
  // 1
  database.createItems(item, (error, taskId) => {
    
    // 2
    if (error) {
      res.send({error})
      return
    }

    // 3
    item.id = itemId

    // 4
    res.send({item})
  })
})

  app.delete('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id)
    const result = database.deleteTask(taskId)
    res.send(result) 
  })
  

  app.patch('/api/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id) 
    const data = req.body 
    const result = database.updateTask(taskId, data)
    res.send(result) 
  })
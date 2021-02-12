const express = require('express') 
const database = require('./mysqlDatabase')

const app = express() 
app.use(express.json())

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

app.get('/api/tasks', (req, res) => {
  // 1
  database.allTasks((error, tasks) => {
    // 2
    if (error) {
      res.send({error})
      return
    }
    // 3
    res.send({tasks})
  })
})

app.listen(8080, () => {
  console.log("The server is listening on port 8080")
})

app.post('/api/tasks', (req, res) => {
  const task = req.body
  
  // 1
  database.createTask(task, (error, taskId) => {
    
    // 2
    if (error) {
      res.send({error})
      return
    }

    // 3
    task.id = taskId

    // 4
    res.send({task})
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
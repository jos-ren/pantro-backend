const mysql = require('mysql')

const dbDetails = {
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USERNAME || 'pantro_user',
    password: process.env.MYSQL_PASSWORD || 'YourPassword!@',
    database: process.env.MYSQL_DATABASE || 'pantro',
}

const connectionString = 
"mysql://yt85lfcoavbh8sr1:gkcafmcyesosl9sh@td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lpjj9xynz4wvr9hx";
const connection = mysql.createConnection(connectionString)

function allTasks(callback) {
    const query = `
      SELECT * 
      FROM tasks
    `
    connection.query(query, null, (error, results, fields) => {
      callback(error, results)
    })
  }
exports.allTasks = allTasks

function createTask(task, callback) {
    // 1
    const query = `
      INSERT INTO tasks (content, completed)
      VALUES (?, ?)
    `
  
    // 2
    const params = [task.content, task.completed]
  
    // 3
    connection.query(query, params, function (error, result, fields) {
      callback(error, result.insertId)
    })
  }

exports.createTask = createTask

function deleteTask(taskId) {

}
exports.deleteTask = deleteTask

function completeTask(taskId, data) {

}
exports.completeTask = completeTask

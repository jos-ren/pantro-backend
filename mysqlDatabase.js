const mysql = require('mysql')

const dbDetails = {
    connectionLimit: 10,
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USERNAME || 'pantro_user',
    password: process.env.MYSQL_PASSWORD || 'MyNewPass4!',
    database: process.env.MYSQL_DATABASE || 'pantro',
    port: 8080
}

// const connection = mysql.createConnection(dbDetails)

const connectionString = 
"mysql://yt85lfcoavbh8sr1:gkcafmcyesosl9sh@td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lpjj9xynz4wvr9hx";
const connection = mysql.createConnection(connectionString);

function allItems() {
  // 1
  const query = `
    SELECT * 
    FROM Item
  `

  // 2
  connection.query(query, null, (error, results, fields) => {
    
    // 3
    console.log(error, results)
  })
}
exports.allItems = allItems

function createItem(item) {

}
exports.createItem = createItem

function deleteItem(itemId) {

}
exports.deleteItem = deleteItem

function completeItem(itemId, data) {

}
exports.completeItem = completeItem

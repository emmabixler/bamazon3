var inquirer = require("inquirer");
var mysql = require("mysql");

//setting up the port
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon."
});
connection.connect(function(err) {
  if (err) throw err;
  bamazon();
  console.log("connected as id" + connection.threadId);
});
//display invntory
function bamazon() {
  console.log("welcome");
  connection.query("SELECT* FROM products", function(err, res) {
    if (err) throw err;
  });
}
//customers input
inquirer.prompt([
  {
    type: "number",
    message: "Enter name of product you would like to buy",
    name: "id"
  },
  {
    type: "number",
    message: "How many would you like to purchase",
    name: "quantity"
  }
]);

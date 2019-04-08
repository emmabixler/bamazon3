var mysql = require("mysql");
var inquirer = require("inquirer");

//setting up the port
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "bamazon."
});
connection.connect(function(error) {
  if (error) throw error;
});

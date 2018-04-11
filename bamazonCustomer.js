var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  // Your username
  user: "root",
  // Your password
  password: "root",
  database: "bamazon",
  socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
})

var items = "SELECT * FROM products"

var qs = [
    {
        name: "product",
        type: "input",
        message: "What is the ID of the Product you would like to buy?",
      },
    {
        name: "quantity",
        type: "input",
        message: "How many units do you want?",
    }
]

function runSearch() {
    inquirer
      .prompt(qs)
      .then(function(answer) {
        var query = "SELECT stock_quantity FROM products WHERE item_id = ?"
        connection.query(query, answer.product, function(err,res){
            if(err){
                console.log(err)
            }
            console.log(res[0].stock_quantity)
            var quant = res[0].stock_quantity
            if(answer.quantity > quant){
                console.log("Insufficient Quantity!")
                showProducts()
                runSearch()
            }
            else{
                var newQuant = quant - answer.quantity
                var update = "UPDATE products SET stock_quantity = ? WHERE item_id = ?"
                connection.query(update, [newQuant, answer.product], function(err,res){
                    console.log('updated')
                    console.log(newQuant)
                    showProducts()
                    runSearch()   
                })   
            }
        })
      })
  }

  function showProducts() {
      connection.query(items, function(err,res){
        if(err){
            console.log(err)
        }  
        console.log( "Item ID | Product | Department | Price | ");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | ");
          }
      })
  }


  showProducts()
  runSearch()
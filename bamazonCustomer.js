let inquirer = require("inquirer");
let mysql = require("mysql");
let connection = require("./connection");

connection.connect(err => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  queryAllProducts();
});

//find all products and print their values
function queryAllProducts() {
  connection.query("SELECT * FROM products", (err, res) => {
    for (var i = 0; i < res.length; i++) {
      console.log(
        `Item ID: ${res[i].item_id} | Item Name: ${res[i].product_name} | Item Price: ${res[i].price}`
      );
      console.log(`---`);
    }
    inquire();
  });
}

//find a specific product by Id
function queryId(chooseId, chooseAmount) {
  connection.query(`SELECT * FROM products WHERE item_id=${chooseId}`, (err, res) => {
    let stock_quantity = res[0].stock_quantity;

    if (chooseAmount <= stock_quantity) {
      //Complete transaction
      let newStock = stock_quantity - chooseAmount;
      let total = res[0].price * chooseAmount;
      connection.query(
        `
      UPDATE products SET ? WHERE item_id=${chooseId}`,
        [
          {
            stock_quantity: newStock
          }
        ],
        error => {
          if (error) throw error;
          console.log(
            `Congratulations you've purchased ${chooseAmount} ${res[0].product_name} for $${total}`
          );
        }
      );
    } else {
      return console.log("Insufficient quantity!");
    }
  });
  inquire();
}

function inquire() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Input the ID of the product you'd like to buy",
        name: "chooseId"
      },
      {
        type: "input",
        message: "How many units would you like to buy?",
        name: "chooseAmount"
      }
    ])
    .then(response => {
      queryId(response.chooseId, response.chooseAmount);
    })
    .then(resp => {
      inquirer
        .prompt([
          {
            type: "list",
            message: "Make another purchase?",
            choices: ["yes", "no"],
            name: "again"
          }
        ])
        .then(res => {
          if (res.again === "yes") {
            inquire();
          } else {
            process.exit();
          }
        });
    });
}
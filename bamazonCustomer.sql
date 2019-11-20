DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

---------------------------------


USE bamazon;

CREATE TABLE products (
    item_id int NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
)

-------------------------------------

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Printer", "Gadgets", 150, 920);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Flask", "Storage", 30, 260);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Backpack", "Back To School", 70, 900);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bread", "Baked", 2.75, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Milk", "Dairy", 5.50, 370);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Juice", "Fridge", 2.25, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Power Bank", "Electrinics", 50, 120);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Krave", "Cereal", 3.45, 174);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shoe", "Footwear", 50, 8000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baby Cloths", "Clothing", 15, 6000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Headset", "Electronics", 62.47, 163);
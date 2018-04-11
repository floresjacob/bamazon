USE bamazon;

CREATE TABLE products(
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price INTEGER(4) NOT NULL, 
    stock_quantity INTEGER(4) NOT NULL
);

INSERT INTO products
VALUES 
(1, "Phone", "Electronics", "500", "300");
INSERT INTO products
VALUES 
(2, "Towel", "Toiletries", "20", "700");
INSERT INTO products
VALUES 
(3, "Cup", "Kitchen", "7", "200");
INSERT INTO products
VALUES 
(4, "Coffee", "Food", "9", "150");
INSERT INTO products
VALUES 
(5, "Aspirin", "Medicine", "5", "100");
INSERT INTO products
VALUES 
(6, "Soccer Ball", "Sports", "20", "400");
INSERT INTO products
VALUES 
(7, "Book", "Media", "14", "100");
INSERT INTO products
VALUES 
(8, "Bean Bag", "Furniture", "80", "60");
INSERT INTO products
VALUES 
(9, "Guitar", "Music", "250", "20");
INSERT INTO products
VALUES 
(10, "Chair", "Furniture", "120", "40");

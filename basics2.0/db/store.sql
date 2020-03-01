CREATE TABLE customers
(
  id INT
  AUTO_INCREMENT NOT NULL PRIMARY KEY,
  firstName VARCHAR
  (50),
  lastName VARCHAR
  (50),
  email VARCHAR
  (50)
);

  CREATE TABLE orders
  (
    id INT
    AUTO_INCREMENT NOT NULL PRIMARY KEY,
  orderDate DATE,
  amount DECIMAL
    (8,2),
  customer_id INT,
  FOREIGN KEY
    (customer_id) REFERENCES customers
    (id)
);


    INSERT INTO customers
      (firstName,lastName,email)
    VALUES
      ("Mike", "Smith", "mike@gmail.com"),
      ("Tina", "bolek", "tina@gmail.com"),
      ("Arthur", "Kosowski", "pl@gmail.com"),
      ("Michal", "Leczinski", "leczek@gmail.com"),
      ("Tim", "Lolek", "tim@gmail.com"),
      ("ale", "Pirlo", "ale@gmail.com"),
      ("Frenseco", "Totti", "totti@gmail.com"),
      ("Marcus", "Birro", "Birro@gmail.com"),
      ('Boy', 'George', 'george@gmail.com'),
      ('George', 'Michael', 'gm@gmail.com'),
      ('David', 'Bowie', 'david@gmail.com'),
      ('Blue', 'Steele', 'blue@gmail.com'),
      ('Bette', 'Davis', 'bette@aol.com');



    INSERT INTO orders
      (orderDate, amount, customer_id)
    VALUES
      ('2016/02/10', 99.99, 1),
      ('2017/11/11', 35.50, 1),
      ('2014/12/12', 800.67, 2),
      ('2015/01/03', 12.50, 2),
      ('1999/04/11', 450.25, 5);
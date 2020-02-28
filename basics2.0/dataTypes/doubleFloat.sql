
create table items
(
  id INT not null
  auto_increment primary key,
    price DECIMAL
  (4,2),
    name VARCHAR
  (100),
    instock CHAR
  (2),
    customer_id INT,
    FOREIGN KEY
  (customer_id) REFERENCES customers
  (id)
);


  CREATE TABLE thingies
  (
    price FLOAT
  );

  INSERT INTO thingies
    (price)
  VALUES
    (88.45);

  SELECT *
  FROM thingies;

  INSERT INTO thingies
    (price)
  VALUES
    (8877.45);

  SELECT *
  FROM thingies;

  INSERT INTO thingies
    (price)
  VALUES
    (8877665544.45);

  SELECT *
  FROM thingies;
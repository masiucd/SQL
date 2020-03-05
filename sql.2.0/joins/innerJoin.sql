SELECT c.firstName, c.lastName
from customers c
  INNER JOIN orders o
  on c.id = o.customer_id;


SELECT *
FROM customers, orders
WHERE customers.id = orders.customer_id;

SELECT *
FROM customers
  JOIN orders
  ON customers.id = orders.customer_id;

select *
from orders
  join customers
  on orders.customer_id = customers.id;

SELECT *
FROM customers
  JOIN orders ON customers.id = orders.id;


SELECT *
FROM customers
  JOIN orders
  ON customers.id = orders.customer_id;

SELECT first_name, last_name, order_date, amount
FROM customers
  JOIN orders
  ON customers.id = orders.customer_id;

SELECT *
FROM orders
  JOIN customers
  ON customers.id = orders.customer_id;
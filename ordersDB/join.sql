select *
from customers , orders
where customers.id = orders.customer_id;

select first_name, last_name
from customers , orders
where customers.id = orders.customer_id;


SELECT *
FROM customers JOIN orders ON customers.id = orders.customer_id;


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

-- left joins

SELECT *
FROM customers
  LEFT JOIN orders
  ON customers.id = orders.customer_id;
SELECT first_name, last_name, order_date, amount
FROM customers
  LEFT JOIN orders
  ON customers.id = orders.customer_id;
SELECT
  first_name,
  last_name,
  IFNULL(SUM(amount), 0) AS total_spent
FROM customers
  LEFT JOIN orders
  ON customers.id = orders.customer_id
GROUP BY customers.id
ORDER BY total_spent;
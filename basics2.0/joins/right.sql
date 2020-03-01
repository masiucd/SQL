
SELECT firstName, lastName
from orders
  RIGHT JOIN customers
  on orders.id = customer_id;


SELECT firstName, lastName, orderDate
from orders
  RIGHT JOIN customers
  on orders.id = customer_id;

SELECT c.firstName, c.lastName, o.amount
from orders o
  RIGHT JOIN customers c
  on o.customer_id = c.id

SELECT c.firstName, c.lastName, IFNULL(o.amount,0)
from orders o
  RIGHT JOIN customers c
  on o.customer_id = c.id
ORDER BY o.amount DESC;
SELECT c.firstName, c.lastName, IFNULL(o.amount,0)
from customers c
  left JOIN orders o
  on c.id = o.customer_id;

SELECT *
FROM orders o
  right JOIN customers c
  on o.customer_id = c.id;
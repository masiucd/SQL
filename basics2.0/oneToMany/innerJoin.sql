SELECT c.firstName, c.lastName
from customers c
  INNER JOIN orders o
  on c.id = o.customer_id;

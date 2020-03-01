
SELECT firstName, lastName
from orders
  RIGHT JOIN customers
  on orders.id = customer_id;


SELECT firstName, lastName, orderDate
from orders
  RIGHT JOIN customers
  on orders.id = customer_id;
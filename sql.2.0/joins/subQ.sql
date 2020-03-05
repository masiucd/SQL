

SELECT *
from orders
where customer_id = (SELECT id
from customers
where lastName = "smith");
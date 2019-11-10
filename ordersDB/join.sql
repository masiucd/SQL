select *
from customers , orders
where customers.id = orders.customer_id;

select first_name, last_name
from customers , orders
where customers.id = orders.customer_id;


SELECT *
FROM customers JOIN orders ON customers.id = orders.customer_id;
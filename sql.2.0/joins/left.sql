SELECT *
FROM customers c
  LEFT JOIN orders o
  on c.id = o.customer_id;


SELECT *
FROM customers c
  LEFT JOIN orders o
  on c.id = o.customer_id
WHERE c.id != NULL;


select c.firstName, c.lastName, o.amount
from customers c
  LEFT join orders o
  on c.id = o.customer_id;

SELECT c.firstName, c.lastName, SUM(o.amount) as totalSpent
from customers c
  left join orders o
  on c.id = o.customer_id
group by c.id
order by c.id DESC;


SELECT c.firstName, c.lastName, IFNULL(SUM(o.amount),0)
from customers c
  left join orders o
  on c.id = o.customer_id
group by c.id
order by c.id DESC;
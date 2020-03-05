select UPPER("hello");
select LOWER("HELLO");

SELECT Upper(title), author_fname
from books;


SELECT CONCAT(Upper(title), " BY ", author_fname) as something
from books;
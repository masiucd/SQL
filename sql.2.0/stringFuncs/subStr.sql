SELECT SUBSTRING("Hello world", 1, 4);
SELECT SUBSTRING("Hello world",  -2);

SELECT SUBSTRING(title, 1, 4)
from books;

SELECT CONCAT(SUBSTRING(title, 1, 4), "  " , author_fname )
from books;

SELECT SUBSTRING(title,1,10) as shortTitle
from books;

SELECT CONCAT(SUBSTRING(title,1,10), " ...") as shortTitle
from books;


SELECT
  SUBSTRING(REPLACE(title, 'e', '3'), 1, 10)
FROM books;

SELECT
  SUBSTRING(REPLACE(title, 'e', '3'), 1, 10) AS 'weird string'
FROM books;

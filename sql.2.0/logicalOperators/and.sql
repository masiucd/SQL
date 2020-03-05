SELECT *
from books b
where b.released_year = 2000 OR
  b.released_year < 1998
ORDER BY b.released_year;


SELECT b.title as apa, b.author_fname as apa2
from books b
WHERE b.released_year > 2010 AND b.author_fname LIKE '%e';


SELECT title, author_lname, released_year
FROM books
WHERE author_lname='Eggers';

SELECT title, author_lname, released_year
FROM books
WHERE released_year > 2010;

SELECT
  title,
  author_lname,
  released_year
FROM books
WHERE author_lname='Eggers'
  AND released_year > 2010;

SELECT 1
< 5 && 7 = 9;
-- false

SELECT -10
> -20 && 0 <= 0;
-- true

SELECT -40
<= 0 AND 10 > 40;
--false

SELECT 54
<= 54 && 'a' = 'A';
-- true

SELECT *
FROM books
WHERE author_lname='Eggers'
  AND released_year > 2010
  AND title LIKE '%novel%';
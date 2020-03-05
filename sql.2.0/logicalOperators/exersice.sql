SELECT *
FROM books b
WHERE b.released_year <= 1980;


SELECT *
from books b
WHERE b.author_lname = 'Eggers' OR b.author_lname = 'Chabon';


SELECT
  *
FROM books b
WHERE b.author_lname = 'Lahiri'
  AND b.released_year > 2000;

SELECT *
from books b
WHERE pages BETWEEN 100 AND 200
order by pages DESC;


SELECT
  *
FROM books b
WHERE b.author_lname LIKE 'C%'
  OR b.author_lname LIKE 'S%';


SELECT
  b.author_lname,
  b.title,
  CASE
    WHEN b.title LIKE '%Stories%' THEN 'Short stories'
    WHEN b.title LIKE '%just kids%' OR
    b.title LIKE '%Heartbreaking Work%' THEN 'Memoir'
    ELSE 'Novel'
  END AS TYPE
FROM books b;


SELECT b.author_lname, b.author_fname,
  case
   WHEN count(*) = 1 then CONCAT(count(*), " book")
   else CONCAT(count(*), " books")
  END as count
from books b
GROUP BY b.author_lname, b.author_fname
ORDER by count(*) DESC;
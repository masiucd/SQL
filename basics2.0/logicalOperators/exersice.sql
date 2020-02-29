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


select b.author_fname, b.author_lname ,
  CASE
    when count(*) = 1 then '1 book'
    else concat(count(*), ' books')
    end as count
from books b
group by b.author_fname , b.author_lname;
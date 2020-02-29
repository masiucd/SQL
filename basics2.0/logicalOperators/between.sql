SELECT b.title , b.released_year
from books b
WHERE b.released_year BETWEEN 2004 AND 2008;


SELECT CAST('2019-06-21'as DATETIME);

SELECT title, released_year
FROM books
WHERE released_year >= 2004 && released_year
<= 2015;

SELECT title, released_year
FROM books
WHERE released_year BETWEEN 2004 AND 2015;

SELECT title, released_year
FROM books
WHERE released_year NOT BETWEEN 2004 AND 2015;

SELECT CAST('2017-05-02' AS DATETIME);

show databases;

use new_testing_db;

SELECT name, birthdt
FROM people
WHERE birthdt BETWEEN '1980-01-01' AND '2000-01-01';

SELECT
  name,
  birthdt
FROM people
WHERE
    birthdt BETWEEN CAST('1980-01-01' AS DATETIME)
    AND CAST('2000-01-01' AS DATETIME);
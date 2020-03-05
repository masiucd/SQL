SELECT DISTINCT(title)
from books;

SELECT COUNT(DISTINCT(author_fname))
from books;


select DISTINCT(concat(author_fname," ", author_lname)) as authors
from books;

select DISTINCT author_fname, author_lname
from books;
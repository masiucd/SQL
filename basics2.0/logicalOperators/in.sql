

SELECT b.title, b.author_lname, b.author_fname
from books b
where b.author_lname in ('carver', 'smith');
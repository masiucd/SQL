select title, author_lname
from books
where author_lname = "Gaiman" or author_lname = "Eggers" or author_lname = "Smith";


select title, author_lname
from books
where author_lname in ('Gaiman','Eggers', "smith");

select title, author_lname
from books
where released_year not in (2001,2005,2004,2003);




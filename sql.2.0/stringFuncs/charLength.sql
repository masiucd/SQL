select CHAR_LENGTH("APA");

select concat("Eggers is ",char_length(author_lname), " charcters long")
from books
where author_lname = 'Eggers';

select distinct(  concat("Eggers is ",char_length(author_lname), " charcters long"))
from books
where author_lname = 'Eggers';

select b.title
from books b;
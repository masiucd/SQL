select CONCAT(title, " author is: ", author_fname) as titleAndFname
from books;


SELECT CONCAT(author_fname, " " , author_lname, " wrote the book: ", title) as authorsBook
from books;


SELECT CONCAT_WS(" 0-0 ", author_fname,author_fname,title) as author
from books;
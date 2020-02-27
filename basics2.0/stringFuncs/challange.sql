-- Reverse and Uppercase the following sentence

-- "Why does my cat look at me with such hatred?"

SELECT UPPER(REVERSE("Why does my cat look at me with such hatred?"));

SELECT
  REPLACE
  (
  CONCAT('I', ' ', 'like', ' ', 'cats'),
  ' ',
  '-'
  ) as stringMutation;


SELECT REPLACE(title, ' ', '->')
from books;

SELECT author_lname as normal, REVERSE(author_lname) as reversed
from books;

SELECT CONCAT(UPPER(author_fname), " " , UPPER(author_lname)) as fullNameInCaps
from books;


SELECT CONCAT(UPPER(title), UPPER(" was released in "), released_year) as blurb
from books;

SELECT title as title , CHAR_LENGTH(title) as length
from books;


SELECT CONCAT(SUBSTRING(title,1,10),"...")as title,
  CONCAT(author_lname, " ", author_fname) as author,
  CONCAT(stock_quantity, " in stock") as quantity
from books;

SELECT CONCAT(SUBSTRING(title,1,10),"...")as title, CONCAT(author_lname, " ", author_fname) as author, CONCAT(stock_quantity, " in stock") as quantity
from books limit
2;
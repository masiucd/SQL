SELECT REPLACE ( concat ('i', ' ', 'like',' ','dogs'),' ','_');


SELECT CONCAT("The ", title )
from books;

select Concat(substring(title, 1 ,10),"...") as "short title", Concat(author_fname,',',author_lname) as "author", Concat(stock_quantity, " in stock") as "quantity"
from books;
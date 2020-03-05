SELECT
  b.title,
  b.released_year,
  CASE
    WHEN b.released_year > 2000 THEN 'Modern book'
    ELSE 'Old book'
  END AS GENRE
FROM books b;



SELECT
  b.title,
  b.stock_quantity,
  CASE
    WHEN b.stock_quantity BETWEEN 0 AND 50 THEN '*'
    WHEN b.stock_quantity BETWEEN 50 AND 100 THEN '**'
    ELSE '***'
  END AS stars
FROM books b
ORDER BY b.stock_quantity DESC;


SELECT title, released_year,
  CASE
         WHEN released_year >= 2000 THEN 'Modern Lit'
         ELSE '20th Century Lit'
       END AS GENRE
FROM books;

SELECT title, stock_quantity,
  CASE
        WHEN stock_quantity BETWEEN 0 AND 50 THEN '*'
        WHEN stock_quantity BETWEEN 51 AND 100 THEN '**'
        ELSE '***'
    END AS STOCK
FROM books;

SELECT title,
  CASE
        WHEN stock_quantity BETWEEN 0 AND 50 THEN '*'
        WHEN stock_quantity BETWEEN 51 AND 100 THEN '**'
        ELSE '***'
    END AS STOCK
FROM books;

SELECT title, stock_quantity,
  CASE
        WHEN stock_quantity BETWEEN 0 AND 50 THEN '*'
        WHEN stock_quantity BETWEEN 51 AND 100 THEN '**'
        WHEN stock_quantity BETWEEN 101 AND 150 THEN '***'
        ELSE '****'
    END AS STOCK
FROM books;

SELECT title, stock_quantity,
  CASE
        WHEN stock_quantity <= 50 THEN '*'
        WHEN stock_quantity <= 100 THEN '**'
        ELSE '***'
    END AS STOCK
FROM books;
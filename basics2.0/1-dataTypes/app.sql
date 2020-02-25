CREATE TABLE langs
(
  lang_id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR
  (50)
  ,colors VARCHAR
  (50)
  ,stars INT
  ,functional BOOLEAN
 );

  insert into langs
    (name, colors, stars, functional)
  values
    ("Java", "black and red", 2, false)
        ,
    ("Ocaml", "orange and white", 4, true)
        ,
    ("Rust", "black and white", 4, false)
        ,
    ("Go lang", "black and red", 3, false)
        ,
    ("Haskell", "black and purple", 5, true)
        ,
    ("C++", "blue and white", 2, false);

  select name , colors
  from langs
  order by name DESC;

  select CONCAT(name, " !!!! " , colors)as nameAndColors
  from langs;



create database sick_fits;


use sick_fits;
drop table shirts;

create table shirts
(
  shirt_id INT NOT NULL
  AUTO_INCREMENT
,article VARCHAR
  (100) NOT NULL
,color VARCHAR
  (60) NOT NULL
,shirt_size CHAR
  (3) NOT NULL
,last_worn INT
  (100)
,PRIMARY KEY
  (shirt_id)
);

  insert into shirts
    (article,color,shirt_size,last_worn)
  values
    ('t-shirt', 'white', 'S', 10),
    ('t-shirt', 'green', 'S', 200),
    ('polo shirt', 'black', 'M', 10),
    ('tank top', 'blue', 'S', 50),
    ('t-shirt', 'pink', 'S', 0),
    ('polo shirt', 'red', 'M', 5),
    ('tank top', 'white', 'S', 200),
    ('tank top', 'blue', 'M', 15);



  insert into shirts
    (article,color,shirt_size,last_worn)
  values
    ("polo-shirt", "purple", "M", 50);

  select article, color
  from shirts;
  select *
  from shirts;

  select *
  from shirts
  where shirt_size = 'M';

  update shirts set shirt_size = 'L';

  update shirts set last_worn = 0 where last_worn = 15;

  select *
  from shirts
  where last_worn = 0;
  update shirts set shirt_size = 'XS', color = 'off white' where color = 'white';

  delete from shirts where last_worn >= 200;

  delete from shirts where article = 'tank top';
  delete from shirts where article = 't-shirt';

  drop table shirts;


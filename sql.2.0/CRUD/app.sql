CREATE TABLE DOGS
(
  dog_id INT NOT NULL
  AUTO_INCREMENT,
     name   VARCHAR
  (100),
     breed  VARCHAR
  (100),
     age    INT,
     PRIMARY KEY
  (dog_id) );



  select CONCAT(name, " is " ,age, " old") as name_and_age
  from dogs;

  select name
  from dogs
  where name like '%x';

  select name
  from dogs
  where name like '%a%';


  select FLOOR(age + 5 / 2)
  from dogs;


  select name, breed
  from dogs
  order by name DESC;

  select name , age
  from dogs
  where breed = 'Pug';

  select dog_id, age
  from dogs
  where dog_id = age;
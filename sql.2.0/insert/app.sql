create table people
(
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
first_name varchar
  (50)
,last_name varchar
  (50)
,age int
);

  insert into people
    (first_name,last_name,age)
  values
    ("Mike", "Smith", 45)
    ,
    ("Tina", "Smith", 15)
    ,
    ("Mia", "Smith", 42)
    ,
    ("Aleks", "Aletchkow", 21)
    ,
    ("Goran", "Padev", 63);

  select SUM(age)
  from people;


  SELECT first_name, AVG(age)/2
  from people
  group by first_name;

  SELECT AVG(age)
  from people;

  SELECT AVG(age) * 2/ 3.14
  from people;

  SELECT first_name, last_name, MAX(age)
  from people;


  select *
  from people
  where age between 20 and 30;
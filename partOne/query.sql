
select *
from dogs;
select *
from users;
select *
from fruit;

select type
from fruit
where type = 'apple';



CREATE TABLE employes
(
  id int NOT null
  AUTO_INCREMENT,
last_name varchar
  (20) not null default "no last name",
first_name varchar
  (20) not null default "no first name",
middle_name varchar
  (20),
age int not null,
current varchar
  (50),
primary key
  (id)
);

  insert into employes
    (last_name,first_name,middle_name,age,current)
  values(
      "smith", "John", "Willy", 23, "Web developer"
)
,
    ("smith", "John", "Willy", 23, "Web developer")
,
    ("smith", "Linda", "Stina", 43, "Web Designer");
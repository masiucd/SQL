

show tables;
show databases;

create database masiu;

use masiu;

create table users
(
  id int,
  name varchar(25),
  age int,
  city varchar(30)
);

create table dogs
(
  id int not null,
  name varchar(30),
  age int,
  breed varchar(20),
  coo bit not null
);

create table fruit
(
  id int not null,
  type varchar(20) not null
);

insert into fruit
  (id,type)
values
  (5, 'kiwi')
,
  (7, 'rasberry')
,
  (8, 'lemon')
,
  (9, 'orange');

insert into users
  (id,name,age,city)
values(2, "Linda", 21, "Ny");

insert into dogs
  (id,name,age,breed,coo)
values(2, "Snickers", 1, "Jamnik", 0);

select *
from dogs;
select *
from users;
select *
from fruit;

select type
from fruit
where type = 'apple';

create table persons
(
  id int not null,
  first_name varchar(25),
  last_name varchar(25),
  age int
);

insert into persons
  (id,first_name,last_name,age)
values(1, "Bob", "Smith", 23)
,
  (2, "Tim", "Jonsson", 56)
,
  (3, "Logan", "arronson", 37)
,
  (4, "Linda", "Smith", 26);

select *
from persons;

create table animals
(
  id int not null ,
  name varchar(10) default "Monkey" not null,
  age int(11) default 0 not null,
  primary key (id)
);

insert into animals
  (id,name,age)
values(1, "bobo", 23)
,
  (2, "carrot", "221")
,
  (3, "Tina", "234")
,
  (4, "carrot", "12")
,
  (5, "carrot", "221");

select *
from animals
where id = 3;

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

  select *
  from employes
  where first_name = "John";

















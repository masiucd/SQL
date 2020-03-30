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


create table persons
(
  id int not null,
  first_name varchar(25),
  last_name varchar(25),
  age int
);
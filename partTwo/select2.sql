

-- Aliases
SELECT cat_id AS id, name
FROM cats;

SELECT name AS 'cat name', breed AS 'kitty breed'
FROM cats;

DESC cats;

SELECT *
FROM cats;

SELECT name
FROM cats;

SELECT age
FROM cats;

SELECT cat_id
FROM cats;

SELECT name, age
FROM cats;

SELECT cat_id, name, age
FROM cats;

SELECT age, breed, name, cat_id
FROM cats;

SELECT cat_id, name, age, breed
FROM cats;


select age
from cats
where name = "Logan";

select name
from cats
where age = 4;
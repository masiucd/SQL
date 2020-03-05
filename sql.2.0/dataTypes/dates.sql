CREATE TABLE people
(
  name VARCHAR(100),
  birthdate DATE,
  birthtime TIME,
  birthdt DATETIME
);

INSERT INTO people
  (name, birthdate, birthtime, birthdt)
VALUES('Padma', '1983-11-11', '10:07:35', '1983-11-11 10:07:35');

INSERT INTO people
  (name, birthdate, birthtime, birthdt)
VALUES('Larry', '1943-12-25', '04:10:42', '1943-12-25 04:10:42');

INSERT INTO people
  (name, birthdate, birthtime, birthdt)
VALUES('Timmy', CURDATE(), CURTIME(), NOW());


SELECT DAYNAME(birthdt)
FROM people;

SELECT DAYOFWEEK(birthdt)
FROM people;


SELECT EXTRACT(YEAR FROM birthdate)
FROM people;


SELECT DATE_FORMAT(birthdate, '%w %m %d')
from people;

SELECT DATE_FORMAT(birthdate, '%Y %W %M %D')
from people;

SELECT DATE_FORMAT(birthdate, '%r')
from people;

SELECT *
FROM people;


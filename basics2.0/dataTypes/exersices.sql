CREATE TABLE inventory
(
  id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY,
  item_name VARCHAR
  (50),
  price DECIMAL
  (6,2),
  quantity INT
);

  SELECT DATE_FORMAT(  NOW(), '%H : %i : %s');
  SELECT DATE_FORMAT(  NOW(), '%Y / %M / %D');
  SELECT DATE_FORMAT(  NOW(), ' %d');
  SELECT DATE_FORMAT(  NOW(), ' %D');
  SELECT DATE_FORMAT(  NOW(), ' %W');
  SELECT DATE_FORMAT(  NOW(), ' %M/%D/%Y');
  SELECT DATE_FORMAT(  NOW(), '%M %D at %h:%i');


  CREATE TABLE teams
  (
    id INT NOT NULL
    AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR
    (30),
    ultras VARCHAR
    (30),
    created_at TIMESTAMP DEFAULT NOW
    ()
  );
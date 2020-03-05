create table shirts
(
  shirt_id INT NOT NULL
  AUTO_INCREMENT PRIMARY KEY
,article VARCHAR
  (50)
,color VARCHAR
  (50)
,shirt_size CHAR
  (1)
,last_worn INT
);

  insert INTO shirts
    (article,color,shirt_size,last_worn)
  VALUES
    ('t-shirt', 'white', 'S', 10),
    ('t-shirt', 'green', 'S', 200),
    ('polo shirt', 'black', 'M', 10),
    ('tank top', 'blue', 'S', 50),
    ('t-shirt', 'pink', 'S', 0),
    ('polo shirt', 'red', 'M', 5),
    ('tank top', 'white', 'S', 200),
    ('tank top', 'blue', 'M', 15);


  INSERT INTO shirts
    (article,color,shirt_size,last_worn)
  VALUES
    ('polo shirt', 'Purple', 'M', 50);


  -- SELECT all shirts
  -- But Only Print Out Article and Color
  SELECT article, color
  from shirts;

  -- SELECT all medium shirts
  -- Print Out Everything But shirt_id
  select shirt_size
  from shirts
  where shirt_size = 'M';


  --   Update the shirt last worn 15 days ago
  -- Change last_worn to 0
  UPDATE shirts SET last_worn = 0 where last_worn = 15;


  --   Update all white shirts
  -- Change size to 'XS' and color to 'off white'

  UPDATE shirts SET  color = "white" where  shirt_size = "XS";


  --   Delete all old shirts
  -- Last worn 200 days ago

  Delete from shirts where last_worn = 200;
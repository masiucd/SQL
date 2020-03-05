CREATE TABLE students
(
  id INT
  AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR
  (100)
);


  CREATE TABLE papers
  (
    title VARCHAR(100),
    grade INT,
    student_id INT,
    FOREIGN KEY (student_id)
        REFERENCES students(id)
        ON DELETE CASCADE
  );


  INSERT INTO students
    (first_name)
  VALUES
    ('Caleb'),
    ('Samantha'),
    ('Raj'),
    ('Carlos'),
    ('Lisa');

  INSERT INTO papers
    (student_id, title, grade )
  VALUES
    (1, 'My First Book Report', 60),
    (1, 'My Second Book Report', 75),
    (2, 'Russian Lit Through The Ages', 94),
    (2, 'De Montaigne and The Art of The Essay', 98),
    (4, 'Borges and Magical Realism', 89);


  SELECT s.first_name, p.title , p.grade
  from students s
    left JOIN papers p
    on s.id = p.student_id;

  SELECT s.first_name, IFNULL(p.title, "MISSING" ) , IFNULL(p.grade,0)
  from students s
    left JOIN papers p
    on s.id = p.student_id;


  SELECT s.first_name, p.title , p.grade
  from students s
    JOIN papers p
    on s.id = p.student_id
  order by p.grade DESC;


  SELECT s.first_name, p.grade
  from students s
    left join papers p
    on s.id = p.student_id;


  SELECT s.first_name, AVG(p.grade)
  from students s
    join papers p
    on s.id = p.student_id;


  SELECT s.first_name, AVG(p.grade)
  from students s
    join papers p
    on s.id = p.student_id
  group by s.first_name;

  SELECT s.first_name, IFNULL( AVG(p.grade),0)
  from students s
    left join papers p
    on s.id = p.student_id
  group by s.first_name
  order BY P.grade;


  -- SELECT
  --   b.title,
  --   b.released_year,
  --   CASE
  --     WHEN b.released_year > 2000 THEN 'Modern book'
  --     ELSE 'Old book'
  --   END AS GENRE
  -- FROM books b;

  SELECT s.first_name, IFNULL( AVG(p.grade),0) as avrege,
    case when AVG(p.grade) is null then "failing"
      when AVG(grade) >= 75 then "passing"
        else "FAILING"
      end as passing_status
  from students s
    left join papers p
    on s.id = p.student_id
  group by s.id
  order BY s.first_name DESC
  ;


  -- EXERCISE 1

  SELECT first_name, title, grade
  FROM students
    INNER JOIN papers
    ON students.id = papers.student_id
  ORDER BY grade DESC;
  -- ALT SOLUTION

  SELECT first_name, title, grade
  FROM students
    RIGHT JOIN papers
    ON students.id = papers.student_id
  ORDER BY grade DESC;
  -- PROBLEM 2

  SELECT first_name, title, grade
  FROM students
    LEFT JOIN papers
    ON students.id = papers.student_id;
  -- PROBLEM 3

  SELECT
    first_name,
    IFNULL(title, 'MISSING'),
    IFNULL(grade, 0)
  FROM students
    LEFT JOIN papers
    ON students.id = papers.student_id;

  -- PROBLEM 4

  SELECT
    first_name,
    IFNULL(AVG(grade), 0) AS average
  FROM students
    LEFT JOIN papers
    ON students.id = papers.student_id
  GROUP BY students.id
  ORDER BY average DESC;
  -- PROBLEM 5

  SELECT first_name,
    Ifnull(Avg(grade), 0) AS average,
    CASE
         WHEN Avg(grade) IS NULL THEN 'FAILING'
         WHEN Avg(grade) >= 75 THEN 'PASSING'
         ELSE 'FAILING'
       end                   AS passing_status
  FROM students
    LEFT JOIN papers
    ON students.id = papers.student_id
  GROUP  BY students.id
  ORDER  BY average DESC;
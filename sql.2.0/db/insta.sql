CREATE TABLE users
(
  id INT
  AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR
  (255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW
  ()
);


  insert into users
    (username,created_at)
  VALUES
    ('Linus45', '2017-06-15 12:15:53'),
    ('Clara', '2017-01-25 05:28:21'),
    ('Mike@21', '2017-12-18 12:53:59');

  CREATE TABLE photos
  (
    id INT
    AUTO_INCREMENT PRIMARY KEY,
  image_url VARCHAR
    (255) NOT NULL,
  user_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT NOW
    (),
  FOREIGN KEY
    (user_id) REFERENCES users
    (id)
);

    insert into photos
      (image_url,user_id,created_at)
    VALUES
      ('https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 4, '2018-12-18 12:23:59'),
      ('https://images.pexels.com/photos/1524146/pexels-photo-1524146.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 2, '2018-12-18 18:13:29'),
      ('https://images.pexels.com/photos/3693901/pexels-photo-3693901.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', 3, '2018-12-18 22:53:19');

    CREATE TABLE comments
    (
      id INTEGER
      AUTO_INCREMENT PRIMARY KEY,
    comment_text VARCHAR
      (255) NOT NULL,
    photo_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT NOW
      (),
    FOREIGN KEY
      (photo_id) REFERENCES photos
      (id),
    FOREIGN KEY
      (user_id) REFERENCES users
      (id)
);

      insert into comments
        (comment_text, photo_id,user_id)
      VALUES
        ("like this one", 2, 1),
        ("More please", 1, 2),
        ("what i wrong with you, you are so awsemoe", 3, 2),
        ("this should not be allowed", 3, 3);

      CREATE TABLE likes
      (
        user_id INTEGER NOT NULL,
        photo_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY(user_id) REFERENCES users(id),
        FOREIGN KEY(photo_id) REFERENCES photos(id),
        PRIMARY KEY(user_id, photo_id)
      );


      CREATE TABLE follows
      (
        follower_id INTEGER NOT NULL,
        followee_id INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        FOREIGN KEY(follower_id) REFERENCES users(id),
        FOREIGN KEY(followee_id) REFERENCES users(id),
        PRIMARY KEY(follower_id, followee_id)
      );


      INSERT INTO follows
        (follower_id,followee_id)
      VALUES
        (1, 2),
        (2, 3),
        (2, 1),
        (1, 4)
      ;
-- who has most likes
SELECT u.username, ph.image_url , count(*) as mostLikes
from users u
  INNER JOIN likes s
  ON u.id = s.user_id
  INNER JOIN photos ph
  on u.id = ph.user_id
GROUP BY ph.id
ORDER BY mostLikes DESC
limit 1;


SELECT
    username,
    photos.id,
    photos.image_url,
    COUNT(*) AS total
FROM photos
INNER JOIN likes
    ON likes.photo_id = photos.id
INNER JOIN users
    ON photos.user_id = users.id
GROUP BY photos.id
ORDER BY total DESC
LIMIT 1;
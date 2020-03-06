-- who has most likes
SELECT u.username , count(*) as mostLikes
from users u
  INNER JOIN likes s
  ON u.id = s.user_id
GROUP BY u.username
ORDER BY mostLikes DESC;
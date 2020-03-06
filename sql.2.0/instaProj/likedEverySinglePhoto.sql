-- find the boots
-- liked every single photo

SELECT DISTINCT(u.username), COUNT(*) as numLikes
from users u
  INNER join likes l
  on u.id = l.user_id
GROUP BY l.user_id
HAVING numLikes = (SELECT COUNT(*)
from photos)
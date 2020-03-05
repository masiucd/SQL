

SELECT DAYNAME(created_at) as day,
  count(*) as freq
from users
GROUP by day
ORDER by freq DESC
limit 3;
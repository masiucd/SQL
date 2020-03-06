-- inactive users
SELECT u.username
from users u
  LEFT JOIN photos ph
  on u.id = ph.user_id
where ph.id IS NULL;
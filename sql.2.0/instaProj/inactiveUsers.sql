-- inactive users
SELECT u.username, ph.image_url
from users u
  LEFT JOIN photos ph
  on u.id = ph.user_id
where ph.image_url IS NULL;
SELECT u.username
from users u
  inner JOIN photos p
  on u.id = p.user_id;
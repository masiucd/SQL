-- top 5 most common hashtags
SELECT t.tag_name, COUNT(*) as total
from tags t
  inner JOIN photo_tags pht
  on t.id = pht.tag_id
GROUP BY t.id
ORDER BY total DESC
LIMIT 5;


SELECT tags
.tag_name,
       Count
(*) AS total
FROM   photo_tags
       JOIN tags
         ON photo_tags.tag_id = tags.id
GROUP  BY tags.id
ORDER  BY total DESC
LIMIT  5;
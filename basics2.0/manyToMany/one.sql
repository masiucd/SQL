SELECT *
from series
  LEFT join reviews
  on series.id = reviews.series_id;


SELECT s.title, r.rating
from series s
  LEFT join reviews r
  on s.id = r.series_id;

SELECT s.title, r.rating as rating
from series s
  LEFT join reviews r
  on s.id = r.series_id
order by rating DESC;


SELECT s.title, ROUND(AVG(r.rating),2) as rating
from series s
  LEFT join reviews r
  on s.id = r.series_id
GROUP by s.title
order by rating DESC;
SELECT s.genre, ROUND(AVG(r.rating),2) as avr_rating
from series s
  INNER join reviews r
  on s.id = r.series_id
group BY s.id
order by avr_rating DESC
limit 5;
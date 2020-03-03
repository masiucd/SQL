SELECT
  title,
  AVG(rating) as avg_rating
FROM series
  JOIN reviews
  ON series.id = reviews.series_id
GROUP BY series.id
ORDER BY avg_rating;

SELECT r.first_name, r.last_name, ra.rating
from reviewers r
  INNER JOIN reviews ra
  ON r.id = ra.reviewer_id;


SELECT
  first_name,
  last_name,
  rating
FROM reviewers
  INNER JOIN reviews
  ON reviewers.id = reviews.reviewer_id;


SELECT
  first_name,
  last_name,
  rating
FROM reviews
  INNER JOIN reviewers
  ON reviewers.id = reviews.reviewer_id;
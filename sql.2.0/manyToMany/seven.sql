SELECT re.first_name,
  re.last_name,
  r.rating,
  Concat(re.first_name, re.last_name) AS Review,
  s.title,
  s.released_year,
  s.genre
FROM reviewers re
  INNER JOIN reviews r
  ON re.id = r.reviewer_id
  INNER JOIN series s
  ON r.series_id = s.id
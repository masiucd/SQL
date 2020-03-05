SELECT re.first_name,
  re.last_name,
  Count(r.rating)                    AS COUNTVAL,
  Ifnull(Min(r.rating), 0)           AS MIN,
  Ifnull(Max(r.rating), 0)           AS MAX,
  Round(Ifnull(Avg(r.rating), 0), 2) AS AVG_RATING,
  CASE
    when COUNT(r.rating) <= 0 THEN "INACTIVE"
    else "Active"
END AS STATUS
FROM reviewers re
  LEFT JOIN reviews r
  ON re.id = r.reviewer_id
GROUP  BY re.id;
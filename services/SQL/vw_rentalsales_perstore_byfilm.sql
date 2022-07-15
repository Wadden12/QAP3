CREATE VIEW public.vw_rentalsales_perstore_byfilm
 AS
SELECT  f.title, 
f.rental_rate * COUNT(r.rental_id) as rental_dollars, 
COUNT(r.rental_id) AS number_rented_movies,
(SUM(p.amount)) -(f.rental_rate * COUNT(r.rental_id)) AS late_fees, 
SUM(p.amount) AS total,
st.store_id,
s.first_name || ' ' || s.last_name AS manager,
a.address ||' '|| ci.city AS store
from store st
JOIN address a USING(address_id)
JOIN city ci USING(city_id)
JOIN staff s USING(store_id)
JOIN payment p USING(staff_id)
JOIN rental r USING(rental_id)
JOIN inventory i USING(inventory_id)
JOIN film f USING(film_id)
GROUP BY f.title, f.rental_rate, st.store_id, s.first_name, s.last_name, a.address, ci.city
ORDER BY total DESC;

ALTER TABLE public.vw_rentalsales_perstore_byfilm
    OWNER TO postgres;
COMMENT ON VIEW public.vw_rentalsales_perstore_byfilm
    IS 'rental sales per film by store';
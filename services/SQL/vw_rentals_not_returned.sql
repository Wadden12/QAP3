CREATE VIEW public.vw_rentals_not_returned
 AS
SELECT s.store_id,
cu.first_name || ' ' || cu.last_name AS customer,
st.first_name || ' ' || st.last_name AS manager, 
f.title as movie,
st.username, 
st.password, 
a.address,
c.city, 
Date(r.return_date) 
FROM store s
JOIN address a USING(address_id)
JOIN city c USING(city_id)
JOIN staff st USING(store_id)
JOIN rental r USING(staff_id)
JOIN customer cu USING(customer_id)
JOIN inventory i USING(inventory_id)
JOIN film f USING(film_id)
WHERE r.return_date IS NULL;

ALTER TABLE public.vw_rentals_not_returned
    OWNER TO postgres;
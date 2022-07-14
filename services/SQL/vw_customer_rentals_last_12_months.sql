CREATE OR REPLACE VIEW public.vw_customer_rentals_last_12_months
 AS
 SELECT c.customer_id,
    (c.first_name::text || ' '::text) || c.last_name::text AS full_name,
    c.email,
    r.rental_date,
    r.return_date,
    f.title
   FROM customer c
     JOIN rental r USING (customer_id)
     JOIN inventory i USING (inventory_id)
     JOIN film f USING (film_id)
  WHERE r.rental_date > (CURRENT_DATE - '1 year'::interval);
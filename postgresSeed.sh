psql postgres;

\c checkout;

CREATE TABLE IF NOT EXISTS products 
(productId int, price double precision, shippingCost double precision, 
details varchar, quantity int, fullfilledByAmazon boolean, soldBy varchar,
sale boolean, electronic boolean, twoYearProtectionPlan double precision,
fourYearProtectionPlan double precision, salePercent double precision);

CREATE UNIQUE INDEX index
    ON public.products USING btree
    (productid ASC NULLS LAST)
    TABLESPACE pg_default;


\copy products from 'outputFile.csv' DELIMITERS ',' CSV;
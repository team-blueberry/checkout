psql postgres;

CREATE TABLE IF NOT EXISTS products 
(productId int, price double precision, shippingCost double precision, 
details varchar, quantity int, fullfilledByAmazon boolean, soldBy varchar,
sale boolean, electronic boolean, twoYearProtectionPlan double precision,
fourYearProtectionPlan double precision, salePercent double precision);




\copy products from 'outputFile1.csv' DELIMITERS ',' CSV HEADER;
psql postgres;

create database checkout;

\c checkout;

CREATE TABLE IF NOT EXISTS products 
(productId int PRIMARY KEY, price double precision, shippingCost double precision, 
details varchar, quantity int, fullfilledByAmazon boolean, soldBy varchar,
sale boolean, electronic boolean, twoYearProtectionPlan double precision,
fourYearProtectionPlan double precision, salePercent double precision);

CREATE TABLE IF NOT EXISTS users 
(userId int PRIMARY KEY, location varchar, loggedIn boolean, 
name varchar, city varchar, zip varchar);



\copy products from 'productOutput.csv' DELIMITERS ',' CSV;
\copy users from 'userOutput.csv' DELIMITERS ',' CSV;

grant all on products to helloworld;
grant all on users to helloworld;


/Users/lexisantoro/checkout/productOutput.csv

\copy products from 'checkout/productOutput.csv' DELIMITERS ',' CSV;

\copy users from 'checkout/userOutput.csv' DELIMITERS ',' CSV;

CREATE DATABASE "blue_cock";

CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL
);

--static table prepopulated with roast names
CREATE TABLE "roast_levels" (
  "id" serial PRIMARY KEY NOT NULL,
  "roast" varchar(50) NOT NULL,
  "description" varchar(500) NOT NULL
);

--static table with prepopulated order status messages
CREATE TABLE "order_status" (
  "id" serial PRIMARY KEY NOT NULL,
  "status" VARCHAR(50) NOT NULL
);

CREATE TABLE "beans" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar(50) NOT NULL,
  "origin_description" varchar(255) NOT NULL,
  "flavor_description" varchar(255) NOT NULL,
  "image_url" varchar(255) NOT NULL,
  "quantity" int NOT NULL,
  "roasting_notes" VARCHAR(1000),
  "cost_per_unit" INT NOT NULL,
);

--junction for associating multiple suggested roasts with each type of bean
CREATE TABLE "roast_junction" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"roast_id" INT NOT NULL REFERENCES "roast_levels"("id"),
	"bean_id" INT NOT NULL REFERENCES "beans"("id")
);

CREATE TABLE "orders" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "first_name" varchar(50) NOT NULL,
  "last_name" varchar(50) NOT NULL,
  "street_address" varchar(150) NOT NULL,
  "city" varchar(50) NOT NULL,
  "state" varchar(2) NOT NULL,
  "zipcode" varchar(10) NOT NULL,
  "phone" varchar(15) NOT NULL,
  "email" varchar(100) NOT NULL,
  "bean" int NOT NULL REFERENCES "beans"("id"),
  "roast" int NOT NULL REFERENCES "roast_levels"("id"),
  "order_status" int NOT NULL REFERENCES "order_status"("id"),
  "quantity" int NOT NULL
);





--static data for testing
INSERT INTO "roast_levels" ("roast")
VALUES ('light'), ('medium'), ('medium dark'), ('dark');



--dummy data
INSERT INTO "roast_junction" ("bean_id", "roast_id")
VALUES (1,1),(1,2),(1,4),(2,4), (2, 3);



--Static data. May be modified later to account for other/more order status messages
INSERT INTO "order_status" ("status")
VALUES ('Unprocessed'),('In progress'),('Complete');

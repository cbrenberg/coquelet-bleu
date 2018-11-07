CREATE DATABASE "blue_cock";

--necessary for admin login
CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
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
  "quantity" int NOT NULL,
  "timestamp" timestamp NOT NULL DEFAULT NOW()
);

CREATE TABLE "beans" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar(75) NOT NULL,
  "origin_description" varchar(2000) NOT NULL,
  "flavor_description" varchar(2000) NOT NULL,
  "image_url" varchar(300) NOT NULL,
  "quantity" int NOT NULL,
  "notes" varchar(2000),
);

--static table prepopulated with roast names
CREATE TABLE "roast_levels" (
  "id" serial PRIMARY KEY NOT NULL,
  "roast" varchar(50) NOT NULL,
  "description" varchar(500) NOT NULL
);

--dummy data for testing
INSERT INTO "roast_levels" ("roast", "description")
VALUES ('light', 'Light brown in color, this roast is generally preferred for milder coffee varieties. There will be no oil on the surface of these beans because they are not roasted long enough for the oils to break through to the surface.'), 
('medium', 'This roast is medium brown in color with a stronger flavor and a non-oily surface. It’s often referred to as the American roast because it is generally preferred in the United States.'), 
('medium dark', 'Rich, dark color, this roast has some oil on the surface and with a slight bittersweet aftertaste.
'), 
('dark', 'This roast produces shiny black beans with an oily surface and a pronounced bitterness. The darker the roast, the less acidity will be found in the coffee beverage.  Dark roast coffees run from slightly dark to charred, and the names are often used interchangeably — be sure to check your beans before you buy them!');


--junction for associating multiple suggested roasts with each type of bean
CREATE TABLE "roast_junction" (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"roast_id" INT NOT NULL REFERENCES "roast_levels"("id"),
	"bean_id" INT NOT NULL REFERENCES "beans"("id")
);


--static table with prepopulated order status messages
CREATE TABLE "order_status" (
  "id" serial PRIMARY KEY NOT NULL,
  "status" VARCHAR(50) NOT NULL
);

--May be modified later to account for other/more order status messages
INSERT INTO "order_status" ("status")
VALUES ('Unprocessed'),('In progress'),('Complete');




------- INSERTS BELOW WERE USED TO POPULATE APP WITH DUMMY DATA FOR TESTING ----------

--add new bean type. will be used from admin 'add beans' page.
INSERT INTO "beans" ("name", "origin_description", "flavor_description", "image_url", "quantity")
VALUES 
('Costa Rica Peaberry', 'From the Monteverde region of Costa Rica, this shade-grown coffee is of the highest quality', 'Nutmeg, Cocoa, Hint of smoke', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk4M1MKXvvxajgqVPMMktAPY8mYq7-huDqXQtwuZ6ZmVhICpdbHw', 32),
('Colombia AA', 'This coffee is rich and smooth, just like the estate on which it is grown.', 'Citrus, bergamot, almond', 'https://www.baltcoffee.com/sites/default/files/styles/large/public/product-images/Colombian-Supremo_0.jpg?itok=9x7oLa-P', 46);


--dummy data
INSERT INTO "roast_junction" ("bean_id", "roast_id")
VALUES (1,3),(1,4),(1,5),(2,5), (2,5);

--INSERT new order. Will be used when customer submits order.
INSERT INTO "orders" ("first_name", "last_name", "street_address", "city", "state", "zipcode", "phone", "email", "bean", "roast", "order_status", "quantity")
VALUES ('Christopher', 'Brenberg', '123 Nicollet', 'Minneapolis', 'MN', '55555', '555-555-5555', 'developer@coqueletbleu.com', 1, 5, 1, 8), 
('Schmitty', 'Houndson', '321 Dogtown Ave', 'Johnson City', 'TN', '32801', '123-456-7890', 'schmitty@hound.dog', 2, 3, 2, 16);



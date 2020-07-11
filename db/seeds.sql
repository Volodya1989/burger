USE burgers_db;
SELECT * FROM burgers;

-- Insert a set of burgers.
INSERT INTO burgers (burger_name,devoured) VALUES ('Chicken burger.', TRUE);
INSERT INTO burgers (burger_name,devoured) VALUES ('Double Cheese burger.',TRUE);
INSERT INTO burgers (burger_name,devoured) VALUES ('Fish burger.',TRUE);

-- Update a boolean of burgers.
UPDATE burgers SET devoured = false WHERE id =1;
UPDATE burgers SET devoured = true WHERE id =2;
UPDATE burgers SET devoured = true WHERE id =3;


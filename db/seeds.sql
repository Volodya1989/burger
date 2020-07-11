USE burgers_db;
SELECT * FROM burgers;

-- Insert a set of burgers.
INSERT INTO burgers (burger_name) VALUES ('Chicken burger.';
INSERT INTO burgers (burger_name) VALUES ('Double Cheese burger.');
INSERT INTO burgers (burger_name) VALUES ('Fish burger.');

-- Update a boolean of burgers.
UPDATE burgers SET devoured = false WHERE id =1;
UPDATE burgers SET devoured = true WHERE id =2;
UPDATE burgers SET devoured = true WHERE id =3;


DROP DATABASE IF EXISTS pantro;
CREATE DATABASE pantro;

-- 2 Create a new user that will access the database
CREATE USER 'pantro_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyNewPass4!';
GRANT ALL PRIVILEGES ON pantro.* TO 'pantro_user'@'localhost';

-- 3 Use the pantro database
USE pantro;

-- 4 Create the tasks table
DROP TABLE IF EXISTS Item;
CREATE TABLE Item (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  Name VARCHAR(255) NOT NULL,
  Expiry DATE NOT NULL,
  Amount BOOLEAN NOT NULL,
  StorageID BOOLEAN NOT NULL,
  ShelfID BOOLEAN NOT NULL,
  NutritionID BOOLEAN NOT NULL
);

INSERT INTO Item(Name, Expiry, Amount, StorageID, ShelfID, NutritionID )
VALUES
("Tomato", "2021-01-01", 3, 0, 3, 2),
("Cucumber", "2021-01-01", 3, 0, 3, 2);







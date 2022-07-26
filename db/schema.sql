DROP DATABASE IF EXISTS movie_db;
CREATE DATABASE movie_db;

USE movie_db;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_name VARCHAR(100) NOT NULL
  
);

CREATE TABLE reviews (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  movie_id INT,
  review TEXT NOT NULL,
  FOREIGN KEY (movie_id)
  REFERENCES movies(id)
  ON DELETE SET NULL
);

INSERT INTO movies (movie_name)
VALUES ("Finding Nemo"),
       ("Dispicable Me: 1"),
       ("Minions: Yellow is the new Black"),
       ("Dispicable Me: 2"),
       ("Minions: Rise of Gru");

INSERT INTO reviews (movie_id, review)
VALUES (8,"5");
DROP DATABASE IF EXISTS petwatch_db;
CREATE DATABASE petwatch_db;

\c petwatch_db;

CREATE TABLE sitters (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  email VARCHAR(40) NOT NULL
  
);

CREATE TABLE owners (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(40) NOT NULL,
    animal_type VARCHAR(30) NOT NULL,
    breed VARCHAR(30) NOT NULL
);


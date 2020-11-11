DROP DATABASE IF EXISTS FEC;

CREATE DATABASE FEC;

USE FEC;

CREATE TABLE Categories (
  id int NOT NULL AUTO_INCREMENT,
  Name varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE ProdcutTypes (
  id int NOT NULL AUTO_INCREMENT,
  Name varchar(50),
  PRIMARY KEY (id)
);

CREATE TABLE Products (
  id int NOT NULL AUTO_INCREMENT,
  description varchar(100) NOT NULL,
  price decimal(7, 2) NOT NULL,
  image varchar(255) NOT NULL,
  featured boolean NOT NULL,
  visited boolean NOT NULL,
  category_id int,
  productType_id int,
  PRIMARY KEY(id),
  FOREIGN KEY (category_id) REFERENCES Categories(id),
  FOREIGN KEY (productType_id) REFERENCES ProdcutTypes(id)
);


DROP DATABASE IF EXISTS FECCarousel;

CREATE DATABASE FECCarousel;

USE FECCarousel;

CREATE TABLE Categories (
  id int NOT NULL AUTO_INCREMENT,
  Name varchar(50) UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE ProductTypes (
  id int NOT NULL AUTO_INCREMENT,
  Name varchar(50) UNIQUE,
  PRIMARY KEY (id)
);

CREATE TABLE Products (
  id int NOT NULL AUTO_INCREMENT,
  description varchar(100) NOT NULL UNIQUE,
  price decimal(7, 2) NOT NULL,
  imageUrl varchar(255) NOT NULL,
  featured boolean NOT NULL,
  visited boolean NOT NULL default 0,
  category_id int,
  productType_id int,
  PRIMARY KEY(id),
  FOREIGN KEY (category_id) REFERENCES Categories(id),
  FOREIGN KEY (productType_id) REFERENCES ProductTypes(id)
);


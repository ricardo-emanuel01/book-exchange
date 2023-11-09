-- creates database
CREATE DATABASE bookdb;

-- creates table users
CREATE TABLE users
(
    id_user SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL
);

-- creates table books
CREATE TABLE books
(
    id_book SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    author TEXT NOT NULL,
    gender TEXT NOT NULL
);

-- add id_books for users' books
ALTER TABLE users
ADD COLUMN id_books INTEGER REFERENCES books
(id_book);






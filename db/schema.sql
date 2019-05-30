create database burgers_db;

use burgers_db;

create table burgers (
id int(32) auto_increment,
burger_name varchar(32),
devoured bool,
primary key(id)
);
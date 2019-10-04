

DROP DATABASE IF EXISTS konnectd_db;

CREATE DATABASE konnectd_db;

USE konnectd_db;


create table profiles(
id integer(10) auto_increment not null,
firstname varchar(50) not null,
lasttname varchar(50) not null,
email varchar(100) not null,
phone_number INTEGER(15),  
position varchar not null(30),
passwords VARCHAR NOT NULL(20)
createdAt timestamp default	current_timestamp not null,
updatedAt timestamp default current_timestamp,
primary key(id)
);

create table projects(
id integer(10) auto_increment not null,
keys varchar(50) not null,
adminaccess BOOLEAN NOT NULL,
createdAt timestamp default	current_timestamp not null,
updatedAt timestamp default current_timestamp,
profile_ids INTEGER(50) NOT NULL
primary key(id)
);

CREATE TABLE project_meta(

    projectkey VARCHAR(50) NOT NULL,
    adminaccess INTEGER(50) NOT NULL,
    pofile INTEGER(50)

);


create table messages(
id integer(10) auto_increment,
primary key(id),
messages varchar(500),

);




create table news(
    post varchar(500)
);
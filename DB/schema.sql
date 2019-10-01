DROP DATABASE IF EXISTS konnectd_db;

CREATE DATABASE konnectd_db;

USE konnectd_db;


create table profiles(
id integer(10) auto_increment not null,
name varchar(30) not null, 
position varchar not null(30),
strt-shift INTEGER(10),
endof-shift INTEGER(10),
adminaccess BOOLEAN NOT NULL,
sicktime INTEGER(10),
pto INTEGER(10),
passwords VARCHAR NOT NULL(20)
createdAt timestamp default	current_timestamp not null,
updatedAt timestamp default current_timestamp,
primary key(id)
);



insert into profiles(name, position, strt-shift, adminaccess,sicktime, pto , passwords)
values("Jonathan W","Web Developer", null, true,10,10,"ginger"),
("Sean K","Web Developer", null, true,10,10,"discgolf" ),
("Rodrigo V","Web Developer", null, true,10,10,"rockstar"),
("Caitlin O","Web Developer", null, true,10,10,"bakersdozen");



create table messages(
id integer(10) auto_increment,
primary key(id),
messages varchar(500),

);



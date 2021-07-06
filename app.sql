CREATE DATABASE blog;

USE blog;

-- user表
CREATE TABLE `user` (
  `id`  int NOT NULL AUTO_INCREMENT ,
  `username`  varchar(50) NOT NULL ,
  `password`  varchar(50) NOT NULL ,
  `avatar`  text NULL ,
  `sign`  varchar(255) NULL ,
  `createTime`  datetime NULL ON UPDATE CURRENT_TIMESTAMP ,
  `updateTime`  datetime NULL ON UPDATE CURRENT_TIMESTAMP ,
  `isDelete`  tinyint NOT NULL DEFAULT 0 ,
  PRIMARY KEY (`id`)
);
CREATE DATABASE IF NOT EXISTS jokes_app;

USE jokes_app;

DROP TABLE IF EXISTS jokes;
CREATE TABLE IF NOT EXISTS jokes (
  id INT NOT NULL AUTO_INCREMENT,
  type VARCHAR(255) NOT NULL,
  setup VARCHAR(255) NOT NULL,
  punchline VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
) AUTO_INCREMENT=1 ;

-- Change a database
ALTER DATABASE `jokes_app`
  CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci; 

-- Change a table
ALTER TABLE `jokes` 
  CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; 

-- Change a column
ALTER TABLE `jokes` 
  CHANGE `punchline` `punchline` VARCHAR(255) 
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
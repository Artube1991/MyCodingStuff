CREATE TABLE people (
    human_id INT AUTO_INCREMENT PRIMARY KEY,
    birth_year INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    registration_date DATE,
    notes VARCHAR(1000)
) ENGINE=InnoDB;

INSERT into people (birth_year, first_name, last_name, registration_date, notes)
VALUES(
        "1991", "Alex", "Ivanove", "2025/01/31", "He is the first to be chosen one"
        ), 
        ("1985", "Anna", "Diskina", "2025/01/04", "She knows how to play violin"
         ), 
         ("1965", "Richard", "Hall", "2025/01/22", "Why Does His Heart Feel So Bad?" 
         ),
         ("1980", "Depeche", "Mode", "2025/01/02", NULL
         ),
         ("2008", "Klaus", "Keys", "2025/01/02", "The Literary one"
         );


CREATE TABLE achievements (
  achievement_id MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  acheivement_title VARCHAR(50) NOT NULL,
  scores INT NOT NULL,
  mascot VARCHAR(50),
  human_getting_achivement INT NOT NULL,
  CONSTRAINT `fk_achievement_human`
    FOREIGN KEY (human_getting_achivement) REFERENCES people (human_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
) ENGINE = InnoDB;
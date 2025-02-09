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
         ),
         (
          "2000", "Olga", "Maman", "2025/02/08", NULL
         ),
         (
          "2009", "Christopher", "Yourchak", "2025/01/15", NULL
         ),
         (
          "1982", "Lena", "Golovach", "2025/02/02", "Legendar girl from the Paper Please"
         ),
         (
          "1999", "Tanya", "Dsh Dsh!", "2025/01/02", "One of the most famous girls in our team!"
         ),
         (
          "1957", "Yuri", "Schevchuk", "2025/01/31", "I'm coming to my Rodina!"
         ),
         (
          "1998", "Denis", "Tschikaylove", "2025/01/20", NULL
         );


CREATE TABLE achievements (
  achievement_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  achievement_title VARCHAR(50) NOT NULL,
  scores INT NOT NULL,
  mascot VARCHAR(50),
  human_getting_achievment_id INT,
  CONSTRAINT `fk_achievement_human`
    FOREIGN KEY (human_getting_achivement_id) REFERENCES people (human_id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
) ENGINE = InnoDB;

INSERT into achievements (acheivement_title, scores, mascot, human_getting_achivement_id)
VALUES(
  "Stick of Truth", "1", "Mr. Hankey", "1"
), 
(
  "Stick of Truth", "1", "Mr. Hankey", "4"
),
(
  "Whiskey in the Jar", "4", NULL, "1"
),
(
  "Whiskey in the Jar", "4", NULL, "3"
),
(
  "Whiksey in the Jar", "4", NULL, "4"
),
(
  "Brilliant Violin", "27", "Owl Sociophobe", "2"
),
(
  "Matza", "256", NULL, "1"
),
(
  "Matza", "256", NULL, "3"
),
(
  "Heavy Metal Thunder", "500", "Pikachu", NULL
),
(
  "Marclar", "250", NULL, NULL
),
(
  "Thousand of Devils!", "1000", "Boyarsky Hat", NULL
)

SELECT acheivement_title, scores
FROM achievements
LEFT OUTER JOIN people
ON achievements.human_getting_achivement_id = people.human_id;
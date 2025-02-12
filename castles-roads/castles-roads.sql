CREATE TABLE castles(
    castle_id INT AUTO_INCREMENT PRIMARY KEY,
    castle_name VARCHAR(100)
) ENGINE=InnoDB;

INSERT INTO castles(castle_name)
VALUES(
    "Hogwarts"
),
(
    "Stonehenge"
),
(
    "Alnwick"
),
(
    "Dover"
),
(
    "The Tower Of London"
),
(
    "Château Comtal de Carcassonne"
),
(
    "Ceausescu Palace"
);

CREATE TABLE roads(
    road_id INT AUTO_INCREMENT PRIMARY KEY,
    castle1_id INT NOT NULL,
    castle2_id INT NOT NULL,
    FOREIGN KEY (castle1_id) REFERENCES castles(castle_id) ON DELETE CASCADE ON UPDATE RESTRICT,
    FOREIGN KEY (castle2_id) REFERENCES castles(castle_id) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE = InnoDB;

INSERT INTO roads(castle1_id, castle2_id)
VALUES(
    "4", "5"
),
(
    "3", "4"
),
(
    "2", "4"
),
(
    "1", "6"
),
(
    "5", "7"
),
(
    "2", "3"
),
(
    "2", "7"
),
(
    "5", "6"
),
(
    "1", "2"
),
(
    "1", "3"
);

-- Решение задачи с использованием моей логики (чат джипити подсказал мне использование псевдонимов):
SELECT c1.castle_name AS departure, c2.castle_name AS destination
FROM roads
LEFT JOIN castles AS c1 ON roads.castle1_id = c1.castle_id
LEFT JOIN castles AS c2 ON roads.castle2_id = c2.castle_id
ORDER BY road_id ASC;

-- Решение задачи чатом ДжиПиТи:
SELECT 
    c1.castle_name AS departure, 
    c2.castle_name AS destination
FROM roads
JOIN castles AS c1 ON roads.castle1_id = c1.castle_id
JOIN castles AS c2 ON roads.castle2_id = c2.castle_id;
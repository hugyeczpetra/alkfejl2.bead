CREATE TABLE categories (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	categoryName VARCHAR(20) NOT NULL
);

CREATE TABLE users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	email VARCHAR(30) NOT NULL,
	password VARCHAR(30) NOT NULL,
	username VARCHAR(20) NOT NULL,
	firstName VARCHAR(20),
	lastName VARCHAR(20),
	created_at datetime,
	updated_at datetime
);

CREATE TABLE plants (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	plantName VARCHAR(25) NOT NULL,
	plantCategory INTEGER NOT NULL,
	plantPicture VARCHAR(40),
	plantNeed VARCHAR(90) NOT NULL,
	user_id INTEGER NOT NULL,
	created_at datetime,
	updated_at datetime,
	CONSTRAINT CategoryToPlant
        FOREIGN KEY (plantCategory)
        REFERENCES categories (id),
	CONSTRAINT AccToPlant 
        FOREIGN KEY (user_id)
        REFERENCES accounts (id)
);

CREATE TABLE reviews (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	plant_id INTEGER NOT NULL,
	user_id INTEGER NOT NULL,
	score INTEGER NOT NULL,
	reviewText VARCHAR(80),
	created_at datetime,
	updated_at datetime,
	CONSTRAINT PlantToReview 
        FOREIGN KEY (plant_id)
        REFERENCES plants (id),
	CONSTRAINT AccToReview 
        FOREIGN KEY (user_id)
        REFERENCES accounts (id)
);

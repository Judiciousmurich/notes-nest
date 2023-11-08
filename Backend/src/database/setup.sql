-- Create the Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (username)
);

INSERT INTO Users (username, password) VALUES ('user1', 'password1');
INSERT INTO Users (username, password) VALUES ('user2', 'password2');
INSERT INTO Users (username, password) VALUES ('user3', 'password3');
INSERT INTO Users (username, password) VALUES ('user4', 'password4');
INSERT INTO Users (username, password) VALUES ('user5', 'password5');
INSERT INTO Users (username, password) VALUES ('user6', 'password6');
INSERT INTO Users (username, password) VALUES ('user7', 'password7');
INSERT INTO Users (username, password) VALUES ('user8', 'password8');
INSERT INTO Users (username, password) VALUES ('user9', 'password9');
INSERT INTO Users (username, password) VALUES ('user10', 'password10');

-- Create the Notes table
CREATE TABLE Notes (
    note_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    title VARCHAR(255),
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Assuming 'user_id' 1 corresponds to 'user1' and 'user_id' 2 corresponds to 'user2'
INSERT INTO Notes (user_id, title, content) VALUES (1, 'First Note', 'This is the content of the first note.');
INSERT INTO Notes (user_id, title, content) VALUES (2, 'Second Note', 'This is the content of the second note.');
INSERT INTO Notes (user_id, title, content) VALUES (3, 'Third Note', 'This is the content of the third note.');
INSERT INTO Notes (user_id, title, content) VALUES (4, 'Fourth Note', 'This is the content of the fourth note.');
INSERT INTO Notes (user_id, title, content) VALUES (5, 'Fifth Note', 'This is the content of the fifth note.');
INSERT INTO Notes (user_id, title, content) VALUES (6, 'Sixth Note', 'This is the content of the sixth note.');
INSERT INTO Notes (user_id, title, content) VALUES (7, 'Seventh Note', 'This is the content of the seventh note.');
INSERT INTO Notes (user_id, title, content) VALUES (8, 'Eighth Note', 'This is the content of the eighth note.');
INSERT INTO Notes (user_id, title, content) VALUES (9, 'Ninth Note', 'This is the content of the ninth note.');
INSERT INTO Notes (user_id, title, content) VALUES (10, 'Tenth Note', 'This is the content of the tenth note.');


-- Create the Categories table
CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255)
);

INSERT INTO Categories (category_name) VALUES ('Work');
INSERT INTO Categories (category_name) VALUES ('Personal');
INSERT INTO Categories (category_name) VALUES ('Study');
INSERT INTO Categories (category_name) VALUES ('Health');
INSERT INTO Categories (category_name) VALUES ('Hobbies');
INSERT INTO Categories (category_name) VALUES ('Travel');
INSERT INTO Categories (category_name) VALUES ('Recipes');
INSERT INTO Categories (category_name) VALUES ('Ideas');
INSERT INTO Categories (category_name) VALUES ('Goals');
INSERT INTO Categories (category_name) VALUES ('Shopping');


-- Create the NoteCategories table
CREATE TABLE NoteCategories (
    note_id INT,
    category_id INT,
    FOREIGN KEY (note_id) REFERENCES Notes(note_id),
    FOREIGN KEY (category_id) REFERENCES Categories(category_id),
    PRIMARY KEY (note_id, category_id)
);

-- Create the Attachments table
CREATE TABLE Attachments (
    attachment_id INT AUTO_INCREMENT PRIMARY KEY,
    note_id INT,
    attachment_url VARCHAR(255),
    attachment_type VARCHAR(50),
    FOREIGN KEY (note_id) REFERENCES Notes(note_id)
);

-- Assuming 'note_id' 1 corresponds to the first note
INSERT INTO Attachments (note_id, attachment_url, attachment_type) VALUES (1, 'https://example.com/image1.jpg', 'image');
-- Assuming 'note_id' 2 corresponds to the second note
INSERT INTO Attachments (note_id, attachment_url, attachment_type) VALUES (2, 'https://example.com/file1.pdf', 'pdf');
-- Assuming 'note_id' 3 corresponds to the third note
INSERT INTO Attachments (note_id, attachment_url, attachment_type) VALUES (3, 'https://example.com/audio1.mp3', 'audio');
-- Continue adding similar records as needed for the other notes and their respective attachments.

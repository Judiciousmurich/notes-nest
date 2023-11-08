-- Create the Users table
CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (username)
);

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

-- Create the Categories table
CREATE TABLE Categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255)
);

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
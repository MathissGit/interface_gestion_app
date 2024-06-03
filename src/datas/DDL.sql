
-- Création des tables --

CREATE TABLE App_User (
    Id_User INT PRIMARY KEY,
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    datebirth DATE,
    email VARCHAR(255),
    password VARCHAR(255),
    access_token VARCHAR(255),
    date_registration DATE
);

CREATE TABLE Course (
    Id_Course INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    duration INT,
    cost DECIMAL(10, 2)
);

CREATE TABLE Plans (
    Id_Plan INT PRIMARY KEY,
    name VARCHAR(255),
    description TEXT,
    cost DECIMAL(10, 2)
);

CREATE TABLE Advantage (
    Id_Advantage INT PRIMARY KEY,
    description TEXT
);

CREATE TABLE Text (
    Id_Text INT PRIMARY KEY,
    text TEXT
);

CREATE TABLE Resources (
    Id_Resources INT PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE Files (
    Id_Files INT PRIMARY KEY,
    link TEXT,
    type VARCHAR(255)
);

CREATE TABLE Planning_Rules (
    Id_Planning_Rules INT PRIMARY KEY,
    minimal_time_slot INT,
    maximal_time_slot INT,
    work_days VARCHAR(255),
    work_hours VARCHAR(255),
    time_between_appointments INT
);

CREATE TABLE Admin (
    Id_User INT PRIMARY KEY,
    FOREIGN KEY (Id_User) REFERENCES App_User(Id_User)
);

CREATE TABLE Coach (
    Id_User INT PRIMARY KEY,
    isConfirmed BOOLEAN,
    FOREIGN KEY (Id_User) REFERENCES App_User(Id_User)
);

CREATE TABLE Patient (
    Id_User INT PRIMARY KEY,
    sold DECIMAL(10, 2),
    FOREIGN KEY (Id_User) REFERENCES App_User(Id_User)
);

CREATE TABLE Assign (
    Id_User INT,
    Id_Course INT,
    IsCertified BOOLEAN,
    date_started DATE,
    date_ended DATE,
    PRIMARY KEY (Id_User, Id_Course),
    FOREIGN KEY (Id_User) REFERENCES App_User(Id_User),
    FOREIGN KEY (Id_Course) REFERENCES Course(Id_Course)
);

CREATE TABLE Subscribe (
    Id_User INT,
    Id_Plan INT,
    date_start DATE,
    date_end DATE,
    PRIMARY KEY (Id_User, Id_Plan),
    FOREIGN KEY (Id_User) REFERENCES App_User(Id_User),
    FOREIGN KEY (Id_Plan) REFERENCES Plans(Id_Plan)
);

CREATE TABLE Pay (
    Id_User INT,
    Id_Plan INT,
    PRIMARY KEY (Id_User, Id_Plan),
    FOREIGN KEY (Id_User) REFERENCES App_User(Id_User),
    FOREIGN KEY (Id_Plan) REFERENCES Plans(Id_Plan)
);

CREATE TABLE Transactions (
    Id_Transaction INT PRIMARY KEY,
    date_transaction DATE,
    amount DECIMAL(10, 2),
    payment_method VARCHAR(255)
);

CREATE TABLE Appointment (
    Id_Appointment INT PRIMARY KEY,
    Id_User INT,
    date DATE,
    FOREIGN KEY (Id_User) REFERENCES App_User(Id_User)
);

CREATE TABLE Correspond (
    Id_Availability INT,
    Id_Planning_Rules INT,
    PRIMARY KEY (Id_Availability, Id_Planning_Rules),
    FOREIGN KEY (Id_Availability) REFERENCES Availability(Id_Availability),
    FOREIGN KEY (Id_Planning_Rules) REFERENCES Planning_Rules(Id_Planning_Rules)
);

CREATE TABLE Availability (
    Id_Availability INT PRIMARY KEY,
    date_availability DATE,
    hour_start_slot TIME,
    hour_end_slot TIME
);

CREATE TABLE Schedule (
    Id_Availability INT,
    week_number INT,
    year_date INT,
    hour_start_date TIME,
    hour_end_date TIME,
    PRIMARY KEY (Id_Availability),
    FOREIGN KEY (Id_Availability) REFERENCES Availability(Id_Availability)
);

CREATE TABLE Attach (
    Id_Planning_Rules INT,
    Id_Appointment INT,
    PRIMARY KEY (Id_Planning_Rules, Id_Appointment),
    FOREIGN KEY (Id_Planning_Rules) REFERENCES Planning_Rules(Id_Planning_Rules),
    FOREIGN KEY (Id_Appointment) REFERENCES Appointment(Id_Appointment)
);

CREATE TABLE Content (
    Id_Resources INT,
    Id_Files INT,
    PRIMARY KEY (Id_Resources, Id_Files),
    FOREIGN KEY (Id_Resources) REFERENCES Resources(Id_Resources),
    FOREIGN KEY (Id_Files) REFERENCES Files(Id_Files)
);

CREATE TABLE Allocated (
    Id_Advantage INT,
    Id_Plan INT,
    PRIMARY KEY (Id_Advantage, Id_Plan),
    FOREIGN KEY (Id_Advantage) REFERENCES Advantage(Id_Advantage),
    FOREIGN KEY (Id_Plan) REFERENCES Plans(Id_Plan)
);

CREATE TABLE Compose (
    Id_Text INT,
    Id_Resources INT,
    PRIMARY KEY (Id_Text, Id_Resources),
    FOREIGN KEY (Id_Text) REFERENCES Text(Id_Text),
    FOREIGN KEY (Id_Resources) REFERENCES Resources(Id_Resources)
);

-- Insertion dans la base de donné --

INSERT INTO App_User (Id_User, lastname, firstname, datebirth, email, password, access_token, date_registration) VALUES
(1, 'Doe', 'John', '1980-01-01', 'john.doe@example.com', 'password123', 'token123', '2023-01-01'),
(2, 'Smith', 'Jane', '1990-02-01', 'jane.smith@example.com', 'password456', 'token456', '2023-02-01');

INSERT INTO Course (Id_Course, name, description, duration, cost) VALUES
(1, 'Yoga Basics', 'Introduction to Yoga', 30, 99.99),
(2, 'Advanced Yoga', 'Advanced techniques in Yoga', 60, 199.99);

INSERT INTO Plans (Id_Plan, name, description, cost) VALUES
(1, 'Monthly Plan', 'Access to all courses for a month', 49.99),
(2, 'Annual Plan', 'Access to all courses for a year', 499.99);

INSERT INTO Advantage (Id_Advantage, description) VALUES
(1, 'Free E-books'),
(2, 'Access to Premium Content');

INSERT INTO Text (Id_Text, text) VALUES
(1, 'Welcome to the Yoga Course'),
(2, 'Advanced Yoga Techniques');

INSERT INTO Resources (Id_Resources, name) VALUES
(1, 'Video Tutorials'),
(2, 'E-books');

INSERT INTO Files (Id_Files, link, type) VALUES
(1, 'https://example.com/video1', 'video'),
(2, 'https://example.com/ebook1', 'ebook');

INSERT INTO Planning_Rules (Id_Planning_Rules, minimal_time_slot, maximal_time_slot, work_days, work_hours, time_between_appointments) VALUES
(1, 30, 120, 'Mon-Fri', '09:00-18:00', 15);

INSERT INTO Admin (Id_User) VALUES
(1);

INSERT INTO Coach (Id_User, isConfirmed) VALUES
(2, TRUE);

INSERT INTO Patient (Id_User, sold) VALUES
(1, 100.00);

INSERT INTO Assign (Id_User, Id_Course, IsCertified, date_started, date_ended) VALUES
(1, 1, TRUE, '2023-03-01', '2023-03-31');

INSERT INTO Subscribe (Id_User, Id_Plan, date_start, date_end) VALUES
(1, 1, '2023-01-01', '2023-01-31');

INSERT INTO Pay (Id_User, Id_Plan) VALUES
(1, 1);

INSERT INTO Transactions (Id_Transaction, date_transaction, amount, payment_method) VALUES
(1, '2023-01-01', 49.99, 'Credit Card');

INSERT INTO Appointment (Id_Appointment, Id_User, date) VALUES
(1, 1, '2023-06-01');

INSERT INTO Correspond (Id_Availability, Id_Planning_Rules) VALUES
(1, 1);

INSERT INTO Availability (Id_Availability, date_availability, hour_start_slot, hour_end_slot) VALUES
(1, '2023-06-01', '09:00:00', '11:00:00');

INSERT INTO Schedule (Id_Availability, week_number, year_date, hour_start_date, hour_end_date) VALUES
(1, 23, 2023, '09:00:00', '11:00:00');

INSERT INTO Attach (Id_Planning_Rules, Id_Appointment) VALUES
(1, 1);

INSERT INTO Content (Id_Resources, Id_Files) VALUES
(1, 1),
(2, 2);

INSERT INTO Allocated (Id_Advantage, Id_Plan) VALUES
(1, 1),
(2, 2);

INSERT INTO Compose (Id_Text, Id_Resources) VALUES
(1, 1),
(2, 2);

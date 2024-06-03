
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

CREATE TABLE Availability (
    Id_Availability INT PRIMARY KEY,
    date_availability DATE,
    hour_start_slot TIME,
    hour_end_slot TIME
);

CREATE TABLE Schedule (
    Id_Availability INT PRIMARY KEY,
    week_number INT,
    year_date INT,
    hour_start_date TIME,
    hour_end_date TIME,
    FOREIGN KEY (Id_Availability) REFERENCES Availability(Id_Availability)
);

CREATE TABLE Correspond (
    Id_Availability INT,
    Id_Planning_Rules INT,
    PRIMARY KEY (Id_Availability, Id_Planning_Rules),
    FOREIGN KEY (Id_Availability) REFERENCES Availability(Id_Availability),
    FOREIGN KEY (Id_Planning_Rules) REFERENCES Planning_Rules(Id_Planning_Rules)
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

-- Insertion dans App_User
INSERT INTO App_User (Id_User, lastname, firstname, datebirth, email, password, access_token, date_registration) VALUES
(1, 'Doe', 'John', '1980-01-01', 'john.doe@example.com', 'password123', 'token123', '2023-01-01'),
(2, 'Smith', 'Jane', '1990-02-01', 'jane.smith@example.com', 'password456', 'token456', '2023-02-01'),
(3, 'Brown', 'Charlie', '1985-03-03', 'charlie.brown@example.com', 'password789', 'token789', '2023-03-01'),
(4, 'Adams', 'Alice', '1992-04-04', 'alice.adams@example.com', 'password012', 'token012', '2023-04-01'),
(5, 'Taylor', 'Chris', '1975-05-05', 'chris.taylor@example.com', 'password345', 'token345', '2023-05-01'),
(6, 'Wilson', 'Pat', '1983-06-06', 'pat.wilson@example.com', 'password678', 'token678', '2023-06-01'),
(7, 'Johnson', 'Kim', '1995-07-07', 'kim.johnson@example.com', 'password901', 'token901', '2023-07-01'),
(8, 'White', 'Alex', '1988-08-08', 'alex.white@example.com', 'password234', 'token234', '2023-08-01'),
(9, 'Lewis', 'Jordan', '1981-09-09', 'jordan.lewis@example.com', 'password567', 'token567', '2023-09-01'),
(10, 'Clark', 'Taylor', '1993-10-10', 'taylor.clark@example.com', 'password890', 'token890', '2023-10-01'),
(11, 'Young', 'Morgan', '1984-11-11', 'morgan.young@example.com', 'password123', 'token123', '2023-11-01'),
(12, 'King', 'Casey', '1996-12-12', 'casey.king@example.com', 'password456', 'token456', '2023-12-01'),
(13, 'Hall', 'Dana', '1979-01-13', 'dana.hall@example.com', 'password789', 'token789', '2023-01-13'),
(14, 'Allen', 'Cameron', '1982-02-14', 'cameron.allen@example.com', 'password012', 'token012', '2023-02-14'),
(15, 'Scott', 'Jamie', '1987-03-15', 'jamie.scott@example.com', 'password345', 'token345', '2023-03-15'),
(16, 'Green', 'Robin', '1994-04-16', 'robin.green@example.com', 'password678', 'token678', '2023-04-16'),
(17, 'Baker', 'Terry', '1986-05-17', 'terry.baker@example.com', 'password901', 'token901', '2023-05-17'),
(18, 'Wright', 'Taylor', '1991-06-18', 'taylor.wright@example.com', 'password234', 'token234', '2023-06-18'),
(19, 'Mitchell', 'Sky', '1989-07-19', 'sky.mitchell@example.com', 'password567', 'token567', '2023-07-19'),
(20, 'Perez', 'Riley', '1993-08-20', 'riley.perez@example.com', 'password890', 'token890', '2023-08-20');

-- Insertion dans Course
INSERT INTO Course (Id_Course, name, description, duration, cost) VALUES
(1, 'Yoga Basics', 'Introduction to Yoga', 30, 99.99),
(2, 'Advanced Yoga', 'Advanced techniques in Yoga', 60, 199.99),
(3, 'Meditation 101', 'Introduction to Meditation', 20, 59.99),
(4, 'Advanced Meditation', 'Advanced techniques in Meditation', 40, 129.99),
(5, 'Pilates Basics', 'Introduction to Pilates', 30, 89.99),
(6, 'Advanced Pilates', 'Advanced techniques in Pilates', 60, 179.99),
(7, 'Fitness Fundamentals', 'Basic fitness routines', 30, 79.99),
(8, 'Advanced Fitness', 'Advanced fitness routines', 60, 159.99),
(9, 'Nutrition 101', 'Introduction to Nutrition', 20, 49.99),
(10, 'Advanced Nutrition', 'Advanced techniques in Nutrition', 40, 119.99),
(11, 'Cardio Basics', 'Introduction to Cardio exercises', 30, 69.99),
(12, 'Advanced Cardio', 'Advanced techniques in Cardio', 60, 139.99),
(13, 'Strength Training Basics', 'Introduction to Strength Training', 30, 99.99),
(14, 'Advanced Strength Training', 'Advanced techniques in Strength Training', 60, 199.99),
(15, 'Flexibility Training Basics', 'Introduction to Flexibility Training', 30, 59.99),
(16, 'Advanced Flexibility Training', 'Advanced techniques in Flexibility Training', 60, 119.99),
(17, 'Aerobics Basics', 'Introduction to Aerobics', 30, 79.99),
(18, 'Advanced Aerobics', 'Advanced techniques in Aerobics', 60, 159.99),
(19, 'Dance Fitness', 'Introduction to Dance Fitness', 30, 89.99),
(20, 'Advanced Dance Fitness', 'Advanced techniques in Dance Fitness', 60, 179.99);

-- Insertion dans Plans
INSERT INTO Plans (Id_Plan, name, description, cost) VALUES
(1, 'Monthly Plan', 'Access to all courses for a month', 49.99),
(2, 'Annual Plan', 'Access to all courses for a year', 499.99),
(3, 'Weekly Plan', 'Access to all courses for a week', 19.99),
(4, 'Daily Plan', 'Access to all courses for a day', 4.99),
(5, 'Quarterly Plan', 'Access to all courses for a quarter', 149.99),
(6, 'Semi-Annual Plan', 'Access to all courses for half a year', 299.99),
(7, 'Family Plan', 'Access to all courses for the whole family for a month', 99.99),
(8, 'Student Plan', 'Discounted access for students for a month', 29.99),
(9, 'Corporate Plan', 'Access for corporate clients for a month', 199.99),
(10, 'Senior Plan', 'Discounted access for seniors for a month', 39.99),
(11, 'Beginner Plan', 'Access for beginners for a month', 24.99),
(12, 'Pro Plan', 'Access for professionals for a month', 74.99),
(13, 'Athlete Plan', 'Access for athletes for a month', 99.99),
(14, 'Wellness Plan', 'Access to wellness courses for a month', 54.99),
(15, 'Detox Plan', 'Access to detox courses for a month', 44.99),
(16, 'Weight Loss Plan', 'Access to weight loss courses for a month', 59.99),
(17, 'Muscle Gain Plan', 'Access to muscle gain courses for a month', 69.99),
(18, 'Endurance Plan', 'Access to endurance training courses for a month', 79.99),
(19, 'Flexibility Plan', 'Access to flexibility training courses for a month', 39.99),
(20, 'Custom Plan', 'Customized access to selected courses', 89.99);

-- Insertion dans Advantage
INSERT INTO Advantage (Id_Advantage, description) VALUES
(1, 'Free E-books'),
(2, 'Access to Premium Content'),
(3, 'Exclusive Webinars'),
(4, 'Personalized Coaching'),
(5, 'Priority Support'),
(6, 'Discount on Merchandise'),
(7, 'Early Access to New Courses'),
(8, 'VIP Events'),
(9, 'Monthly Newsletter'),
(10, 'Special Discounts'),
(11, 'Bonus Content'),
(12, 'Access to Beta Features'),
(13, 'Referral Bonuses'),
(14, 'Access to Community Forums'),
(15, 'Customized Workout Plans'),
(16, 'Nutrition Consultations'),
(17, 'Mental Health Resources'),
(18, 'Live Q&A Sessions'),
(19, 'Progress Tracking Tools'),
(20, 'Exclusive Mobile App Features');

-- Insertion dans Text
INSERT INTO Text (Id_Text, text) VALUES
(1, 'Welcome to the Yoga Course'),
(2, 'Advanced Yoga Techniques'),
(3, 'Meditation Techniques for Beginners'),
(4, 'The Benefits of Advanced Meditation'),
(5, 'Introduction to Pilates'),
(6, 'Advanced Pilates Techniques'),
(7, 'Basic Fitness Routines'),
(8, 'Advanced Fitness Routines'),
(9, 'Introduction to Nutrition'),
(10, 'Advanced Nutrition Tips'),
(11, 'Basic Cardio Exercises'),
(12, 'Advanced Cardio Techniques'),
(13, 'Strength Training for Beginners'),
(14, 'Advanced Strength Training Tips'),
(15, 'Flexibility Training for Beginners'),
(16, 'Advanced Flexibility Techniques'),
(17, 'Introduction to Aerobics'),
(18, 'Advanced Aerobics Techniques'),
(19, 'Dance Fitness for Beginners'),
(20, 'Advanced Dance Fitness Routines');

-- Insertion dans Resources
INSERT INTO Resources (Id_Resources, name) VALUES
(1, 'Video Tutorials'),
(2, 'E-books'),
(3, 'Audio Guides'),
(4, 'Interactive Sessions'),
(5, 'Live Classes'),
(6, 'Articles'),
(7, 'Infographics'),
(8, 'Podcasts'),
(9, 'Webinars'),
(10, 'Quizzes'),
(11, 'Checklists'),
(12, 'Workbooks'),
(13, 'Community Forums'),
(14, 'Support Groups'),
(15, 'Meditation Guides'),
(16, 'Workout Plans'),
(17, 'Diet Plans'),
(18, 'Motivational Content'),
(19, 'Case Studies'),
(20, 'Success Stories');

-- Insertion dans Files
INSERT INTO Files (Id_Files, link, type) VALUES
(1, 'https://example.com/video1', 'video'),
(2, 'https://example.com/ebook1', 'ebook'),
(3, 'https://example.com/audio1', 'audio'),
(4, 'https://example.com/session1', 'session'),
(5, 'https://example.com/liveclass1', 'liveclass'),
(6, 'https://example.com/article1', 'article'),
(7, 'https://example.com/infographic1', 'infographic'),
(8, 'https://example.com/podcast1', 'podcast'),
(9, 'https://example.com/webinar1', 'webinar'),
(10, 'https://example.com/quiz1', 'quiz'),
(11, 'https://example.com/checklist1', 'checklist'),
(12, 'https://example.com/workbook1', 'workbook'),
(13, 'https://example.com/forum1', 'forum'),
(14, 'https://example.com/supportgroup1', 'supportgroup'),
(15, 'https://example.com/meditation1', 'meditation'),
(16, 'https://example.com/workoutplan1', 'workoutplan'),
(17, 'https://example.com/dietplan1', 'dietplan'),
(18, 'https://example.com/motivational1', 'motivational'),
(19, 'https://example.com/casestudy1', 'casestudy'),
(20, 'https://example.com/successstory1', 'successstory');

-- Insertion dans Planning_Rules
INSERT INTO Planning_Rules (Id_Planning_Rules, minimal_time_slot, maximal_time_slot, work_days, work_hours, time_between_appointments) VALUES
(1, 30, 120, 'Mon-Fri', '09:00-17:00', 15),
(2, 15, 90, 'Mon-Sun', '08:00-20:00', 10),
(3, 20, 60, 'Tue-Thu', '10:00-18:00', 20),
(4, 45, 180, 'Wed-Sat', '08:00-16:00', 30),
(5, 30, 90, 'Mon-Sat', '07:00-19:00', 10),
(6, 15, 60, 'Mon-Sun', '09:00-21:00', 15),
(7, 60, 180, 'Mon-Wed', '08:00-12:00', 20),
(8, 30, 90, 'Thu-Sun', '14:00-22:00', 15),
(9, 15, 120, 'Tue-Fri', '10:00-18:00', 10),
(10, 30, 150, 'Mon-Fri', '09:00-17:00', 25),
(11, 45, 180, 'Sat-Sun', '08:00-16:00', 20),
(12, 20, 90, 'Mon-Thu', '08:00-14:00', 15),
(13, 15, 60, 'Fri-Sun', '10:00-18:00', 10),
(14, 30, 120, 'Mon-Sat', '07:00-17:00', 20),
(15, 15, 90, 'Mon-Fri', '09:00-19:00', 10),
(16, 20, 60, 'Tue-Sat', '10:00-20:00', 15),
(17, 30, 180, 'Mon-Sun', '08:00-22:00', 30),
(18, 45, 150, 'Wed-Sun', '07:00-15:00', 20),
(19, 15, 90, 'Mon-Thu', '09:00-21:00', 10),
(20, 30, 120, 'Fri-Sun', '08:00-18:00', 15);

-- Insertion dans Admin
INSERT INTO Admin (Id_User) VALUES
(1),
(2),
(3),
(4),
(5),
(6),
(7),
(8),
(9),
(10),
(11),
(12),
(13),
(14),
(15),
(16),
(17),
(18),
(19),
(20);

-- Insertion dans Coach
INSERT INTO Coach (Id_User, isConfirmed) VALUES
(1, TRUE),
(2, TRUE),
(3, TRUE),
(4, TRUE),
(5, TRUE),
(6, TRUE),
(7, TRUE),
(8, TRUE),
(9, TRUE),
(10, TRUE),
(11, TRUE),
(12, TRUE),
(13, TRUE),
(14, TRUE),
(15, TRUE),
(16, TRUE),
(17, TRUE),
(18, TRUE),
(19, TRUE),
(20, TRUE);

-- Insertion dans Patient
INSERT INTO Patient (Id_User, sold) VALUES
(1, 100.00),
(2, 150.00),
(3, 50.00),
(4, 75.00),
(5, 200.00),
(6, 250.00),
(7, 300.00),
(8, 350.00),
(9, 400.00),
(10, 450.00),
(11, 500.00),
(12, 550.00),
(13, 600.00),
(14, 650.00),
(15, 700.00),
(16, 750.00),
(17, 800.00),
(18, 850.00),
(19, 900.00),
(20, 950.00);

-- Insertion dans Availability
INSERT INTO Availability (Id_Availability, date_availability, hour_start_slot, hour_end_slot) VALUES
(1, '2023-07-01', '09:00:00', '10:00:00'),
(2, '2023-07-01', '10:00:00', '12:00:00'),
(3, '2023-07-02', '11:00:00', '13:00:00'),
(4, '2023-07-03', '14:00:00', '16:00:00'),
(5, '2023-07-04', '15:00:00', '17:00:00'),
(6, '2023-07-05', '08:00:00', '09:00:00'),
(7, '2023-07-06', '12:00:00', '14:00:00'),
(8, '2023-07-07', '13:00:00', '15:00:00'),
(9, '2023-07-08', '09:00:00', '10:00:00'),
(10, '2023-07-09', '10:00:00', '12:00:00'),
(11, '2023-07-10', '11:00:00', '13:00:00'),
(12, '2023-07-11', '14:00:00', '16:00:00'),
(13, '2023-07-12', '15:00:00', '17:00:00'),
(14, '2023-07-13', '08:00:00', '09:00:00'),
(15, '2023-07-14', '12:00:00', '14:00:00'),
(16, '2023-07-15', '13:00:00', '15:00:00');

-- Insérer dans Schedule
INSERT INTO Schedule (Id_Availability, week_number, year_date, hour_start_date, hour_end_date) VALUES
(1, 23, 2023, '09:00:00', '11:00:00');

-- Insérer dans Appointment
INSERT INTO Appointment (Id_Appointment, Id_User, date) VALUES
(1, 1, '2023-06-01');

-- Insérer dans Assign
INSERT INTO Assign (Id_User, Id_Course, IsCertified, date_started, date_ended) VALUES
(1, 1, TRUE, '2023-03-01', '2023-03-31');

-- Insérer dans Subscribe
INSERT INTO Subscribe (Id_User, Id_Plan, date_start, date_end) VALUES
(1, 1, '2023-01-01', '2023-01-31');

-- Insérer dans Pay
INSERT INTO Pay (Id_User, Id_Plan) VALUES
(1, 1);

-- Insérer dans Transactions
INSERT INTO Transactions (Id_Transaction, date_transaction, amount, payment_method) VALUES
(1, '2023-01-01', 49.99, 'Credit Card');

-- Insérer dans Correspond
INSERT INTO Correspond (Id_Availability, Id_Planning_Rules) VALUES
(1, 1);

-- Insérer dans Attach
INSERT INTO Attach (Id_Planning_Rules, Id_Appointment) VALUES
(1, 1);

-- Insérer dans Content
INSERT INTO Content (Id_Resources, Id_Files) VALUES
(1, 1),
(2, 2);

-- Insérer dans Allocated
INSERT INTO Allocated (Id_Advantage, Id_Plan) VALUES
(1, 1),
(2, 2);

-- Insérer dans Compose
INSERT INTO Compose (Id_Text, Id_Resources) VALUES
(1, 1),
(2, 2);

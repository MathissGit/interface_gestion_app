BEGIN TRANSACTION;
DROP TABLE IF EXISTS "App_User";
CREATE TABLE IF NOT EXISTS "App_User" (
	"Id_User"	INT,
	"lastname"	VARCHAR(255),
	"firstname"	VARCHAR(255),
	"datebirth"	DATE,
	"email"	VARCHAR(255),
	"password"	VARCHAR(255),
	"access_token"	VARCHAR(255),
	"date_registration"	DATE,
	"role"	VARCHAR(10) CHECK("role" IN ('coach', 'patient', 'admin')),
	PRIMARY KEY("Id_User")
);
DROP TABLE IF EXISTS "Course";
CREATE TABLE IF NOT EXISTS "Course" (
	"Id_Course"	INT,
	"name"	VARCHAR(255),
	"description"	TEXT,
	"duration"	INT,
	"cost"	DECIMAL(10, 2),
	PRIMARY KEY("Id_Course")
);
DROP TABLE IF EXISTS "Plans";
CREATE TABLE IF NOT EXISTS "Plans" (
	"Id_Plan"	INT,
	"name"	VARCHAR(255),
	"description"	TEXT,
	"cost"	DECIMAL(10, 2),
	PRIMARY KEY("Id_Plan")
);
DROP TABLE IF EXISTS "Advantage";
CREATE TABLE IF NOT EXISTS "Advantage" (
	"Id_Advantage"	INT,
	"description"	TEXT,
	PRIMARY KEY("Id_Advantage")
);
DROP TABLE IF EXISTS "Text";
CREATE TABLE IF NOT EXISTS "Text" (
	"Id_Text"	INT,
	"text"	TEXT,
	PRIMARY KEY("Id_Text")
);
DROP TABLE IF EXISTS "Resources";
CREATE TABLE IF NOT EXISTS "Resources" (
	"Id_Resources"	INT,
	"name"	VARCHAR(255),
	PRIMARY KEY("Id_Resources")
);
DROP TABLE IF EXISTS "Files";
CREATE TABLE IF NOT EXISTS "Files" (
	"Id_Files"	INT,
	"link"	TEXT,
	"type"	VARCHAR(255),
	PRIMARY KEY("Id_Files")
);
DROP TABLE IF EXISTS "Planning_Rules";
CREATE TABLE IF NOT EXISTS "Planning_Rules" (
	"Id_Planning_Rules"	INT,
	"minimal_time_slot"	INT,
	"maximal_time_slot"	INT,
	"work_days"	VARCHAR(255),
	"work_hours"	VARCHAR(255),
	"time_between_appointments"	INT,
	PRIMARY KEY("Id_Planning_Rules")
);
DROP TABLE IF EXISTS "Assign";
CREATE TABLE IF NOT EXISTS "Assign" (
	"Id_User"	INT,
	"Id_Course"	INT,
	"IsCertified"	BOOLEAN,
	"date_started"	DATE,
	"date_ended"	DATE,
	FOREIGN KEY("Id_User") REFERENCES "App_User"("Id_User"),
	FOREIGN KEY("Id_Course") REFERENCES "Course"("Id_Course"),
	PRIMARY KEY("Id_User","Id_Course")
);
DROP TABLE IF EXISTS "Subscribe";
CREATE TABLE IF NOT EXISTS "Subscribe" (
	"Id_User"	INT,
	"Id_Plan"	INT,
	"date_start"	DATE,
	"date_end"	DATE,
	FOREIGN KEY("Id_Plan") REFERENCES "Plans"("Id_Plan"),
	FOREIGN KEY("Id_User") REFERENCES "App_User"("Id_User"),
	PRIMARY KEY("Id_User","Id_Plan")
);
DROP TABLE IF EXISTS "Pay";
CREATE TABLE IF NOT EXISTS "Pay" (
	"Id_User"	INT,
	"Id_Plan"	INT,
	FOREIGN KEY("Id_User") REFERENCES "App_User"("Id_User"),
	FOREIGN KEY("Id_Plan") REFERENCES "Plans"("Id_Plan"),
	PRIMARY KEY("Id_User","Id_Plan")
);
DROP TABLE IF EXISTS "Transactions";
CREATE TABLE IF NOT EXISTS "Transactions" (
	"Id_Transaction"	INT,
	"date_transaction"	DATE,
	"amount"	DECIMAL(10, 2),
	"payment_method"	VARCHAR(255),
	PRIMARY KEY("Id_Transaction")
);
DROP TABLE IF EXISTS "Appointment";
CREATE TABLE IF NOT EXISTS "Appointment" (
	"Id_Appointment"	INT,
	"Id_User"	INT,
	"date"	DATE,
	FOREIGN KEY("Id_User") REFERENCES "App_User"("Id_User"),
	PRIMARY KEY("Id_Appointment")
);
DROP TABLE IF EXISTS "Availability";
CREATE TABLE IF NOT EXISTS "Availability" (
	"Id_Availability"	INT,
	"date_availability"	DATE,
	"hour_start_slot"	TIME,
	"hour_end_slot"	TIME,
	PRIMARY KEY("Id_Availability")
);
DROP TABLE IF EXISTS "Schedule";
CREATE TABLE IF NOT EXISTS "Schedule" (
	"Id_Availability"	INT,
	"week_number"	INT,
	"year_date"	INT,
	"hour_start_date"	TIME,
	"hour_end_date"	TIME,
	FOREIGN KEY("Id_Availability") REFERENCES "Availability"("Id_Availability"),
	PRIMARY KEY("Id_Availability")
);
DROP TABLE IF EXISTS "Correspond";
CREATE TABLE IF NOT EXISTS "Correspond" (
	"Id_Availability"	INT,
	"Id_Planning_Rules"	INT,
	FOREIGN KEY("Id_Planning_Rules") REFERENCES "Planning_Rules"("Id_Planning_Rules"),
	FOREIGN KEY("Id_Availability") REFERENCES "Availability"("Id_Availability"),
	PRIMARY KEY("Id_Availability","Id_Planning_Rules")
);
DROP TABLE IF EXISTS "Attach";
CREATE TABLE IF NOT EXISTS "Attach" (
	"Id_Planning_Rules"	INT,
	"Id_Appointment"	INT,
	FOREIGN KEY("Id_Appointment") REFERENCES "Appointment"("Id_Appointment"),
	FOREIGN KEY("Id_Planning_Rules") REFERENCES "Planning_Rules"("Id_Planning_Rules"),
	PRIMARY KEY("Id_Planning_Rules","Id_Appointment")
);
DROP TABLE IF EXISTS "Content";
CREATE TABLE IF NOT EXISTS "Content" (
	"Id_Resources"	INT,
	"Id_Files"	INT,
	FOREIGN KEY("Id_Files") REFERENCES "Files"("Id_Files"),
	FOREIGN KEY("Id_Resources") REFERENCES "Resources"("Id_Resources"),
	PRIMARY KEY("Id_Resources","Id_Files")
);
DROP TABLE IF EXISTS "Allocated";
CREATE TABLE IF NOT EXISTS "Allocated" (
	"Id_Advantage"	INT,
	"Id_Plan"	INT,
	FOREIGN KEY("Id_Advantage") REFERENCES "Advantage"("Id_Advantage"),
	PRIMARY KEY("Id_Advantage","Id_Plan"),
	FOREIGN KEY("Id_Plan") REFERENCES "Plans"("Id_Plan")
);
DROP TABLE IF EXISTS "Compose";
CREATE TABLE IF NOT EXISTS "Compose" (
	"Id_Text"	INT,
	"Id_Resources"	INT,
	PRIMARY KEY("Id_Text","Id_Resources"),
	FOREIGN KEY("Id_Text") REFERENCES "Text"("Id_Text"),
	FOREIGN KEY("Id_Resources") REFERENCES "Resources"("Id_Resources")
);

INSERT INTO App_User ("Id_User", "lastname", "firstname", "datebirth", "email", "password", "access_token", "date_registration", "role")
VALUES
(1, 'Doe', 'John', '1990-05-15', 'john.doe@example.com', 'password123', 'token123', '2024-06-03', 'admin'),
(2, 'Smith', 'Emma', '1985-08-25', 'emma.smith@example.com', 'password456', 'token456', '2024-06-03', 'coach'),
(3, 'Johnson', 'Michael', '1993-02-10', 'michael.johnson@example.com', 'password789', 'token789', '2024-06-03', 'patient'),
(4, 'Brown', 'Emily', '1988-09-12', 'emily.brown@example.com', 'password123', 'token123', '2024-06-03', 'patient'),
(5, 'Wilson', 'Daniel', '1975-03-21', 'daniel.wilson@example.com', 'password456', 'token456', '2024-06-03', 'patient'),
(6, 'Martinez', 'Sophia', '1996-11-05', 'sophia.martinez@example.com', 'password789', 'token789', '2024-06-03', 'patient'),
(7, 'Anderson', 'Oliver', '1982-07-30', 'oliver.anderson@example.com', 'password123', 'token123', '2024-06-03', 'patient'),
(8, 'Taylor', 'Isabella', '1989-05-18', 'isabella.taylor@example.com', 'password456', 'token456', '2024-06-03', 'patient'),
(9, 'Thomas', 'Ethan', '1978-12-09', 'ethan.thomas@example.com', 'password789', 'token789', '2024-06-03', 'patient'),
(10, 'Hernandez', 'Ava', '1993-04-17', 'ava.hernandez@example.com', 'password123', 'token123', '2024-06-03', 'coach'),
(11, 'Moore', 'William', '1980-06-28', 'william.moore@example.com', 'password456', 'token456', '2024-06-03', 'patient'),
(12, 'Nelson', 'Charlotte', '1987-10-14', 'charlotte.nelson@example.com', 'password789', 'token789', '2024-06-03', 'patient'),
(13, 'Gonzalez', 'James', '1990-02-25', 'james.gonzalez@example.com', 'password123', 'token123', '2024-06-03', 'coach'),
(14, 'Roberts', 'Mia', '1984-08-08', 'mia.roberts@example.com', 'password456', 'token456', '2024-06-03', 'patient'),
(15, 'White', 'David', '1995-06-19', 'david.white@example.com', 'password789', 'token789', '2024-06-03', 'patient'),
(16, 'Lewis', 'Grace', '1981-11-23', 'grace.lewis@example.com', 'password123', 'token123', '2024-06-03', 'patient'),
(17, 'Lee', 'Joseph', '1977-01-04', 'joseph.lee@example.com', 'password456', 'token456', '2024-06-03', 'patient'),
(18, 'Walker', 'Liam', '1994-09-07', 'liam.walker@example.com', 'password789', 'token789', '2024-06-03', 'coach'),
(19, 'Hall', 'Zoe', '1986-03-12', 'zoe.hall@example.com', 'password123', 'token123', '2024-06-03', 'patient'),
(20, 'Young', 'Evelyn', '1979-07-26', 'evelyn.young@example.com', 'password456', 'token456', '2024-06-03', 'patient'),
(21, 'Allen', 'Alexander', '1992-05-09', 'alexander.allen@example.com', 'password789', 'token789', '2024-06-03', 'patient'),
(22, 'King', 'Sophie', '1983-02-16', 'sophie.king@example.com', 'password123', 'token123', '2024-06-03', 'patient'),
(23, 'Scott', 'Elijah', '1976-04-29', 'elijah.scott@example.com', 'password456', 'token456', '2024-06-03', 'coach'),
(24, 'Baker', 'Avery', '1991-08-02', 'avery.baker@example.com', 'password789', 'token789', '2024-06-03', 'coach'),
(25, 'Adams', 'Harper', '1985-12-15', 'harper.adams@example.com', 'password123', 'token123', '2024-06-03', 'patient'),
(26, 'Garcia', 'Logan', '1997-10-20', 'logan.garcia@example.com', 'password456', 'token456', '2024-06-03', 'patient'),
(27, 'Clark', 'Sofia', '1974-06-03', 'sofia.clark@example.com', 'password789', 'token789', '2024-06-03', 'coach'),
(28, 'Wright', 'Jackson', '1988-03-27', 'jackson.wright@example.com', 'password123', 'token123', '2024-06-03', 'patient'),
(29, 'Lopez', 'Lucas', '1993-11-10', 'lucas.lopez@example.com', 'password456', 'token456', '2024-06-03', 'patient'),
(30, 'Green', 'Chloe', '1978-07-23', 'chloe.green@example.com', 'password789', 'token789', '2024-06-03', 'coach'),
(31, 'Turner', 'Madison', '1989-04-06', 'madison.turner@example.com', 'password123', 'token123', '2024-06-03', 'patient'),
(32, 'Morgan', 'Henry', '1996-01-19', 'henry.morgan@example.com', 'password456', 'token456', '2024-06-03', 'patient'),
(33, 'Cooper', 'Lily', '1980-08-12', 'lily.cooper@example.com', 'password789', 'token789', '2024-06-03', 'coach');

INSERT INTO Course ("Id_Course", "name", "description", "duration", "cost")
VALUES
(1, 'Yoga Basics', 'Introduction to yoga postures and breathing techniques.', 60, 29.99),
(2, 'Meditation Mastery', 'Learn various meditation techniques for mental peace.', 45, 19.99);

INSERT INTO Plans ("Id_Plan", "name", "description", "cost")
VALUES
(1, 'Basic Plan', 'Access to basic features.', 9.99),
(2, 'Premium Plan', 'Access to premium features and content.', 19.99);

INSERT INTO Advantage ("Id_Advantage", "description")
VALUES
(1, 'Discount on premium courses'),
(2, 'Exclusive access to new features');

INSERT INTO Text ("Id_Text", "text")
VALUES
(1, 'Introduction to Yoga'),
(2, 'Benefits of Meditation');

INSERT INTO Resources ("Id_Resources", "name")
VALUES
(1, 'Yoga Guide'),
(2, 'Meditation Audio');

INSERT INTO Files ("Id_Files", "link", "type")
VALUES
(1, 'https://example.com/yoga_guide.pdf', 'pdf'),
(2, 'https://example.com/meditation_audio.mp3', 'audio');

INSERT INTO Subscribe ("Id_User", "Id_Plan", "date_start", "date_end")
VALUES
(3, 1, '2024-06-03', '2024-07-03'); 

INSERT INTO Pay ("Id_User", "Id_Plan")
VALUES
(3, 1); 

INSERT INTO Assign ("Id_User", "Id_Course", "IsCertified", "date_started", "date_ended")
VALUES
(3, 1, false, '2024-06-03', NULL);

DROP VIEW IF EXISTS "Admin";
CREATE VIEW Admin AS
SELECT * FROM App_User WHERE role = 'admin';
DROP VIEW IF EXISTS "Coach";
CREATE VIEW Coach AS
SELECT * FROM App_User WHERE role = 'coach';
DROP VIEW IF EXISTS "Patient";
CREATE VIEW Patient AS
SELECT * FROM App_User WHERE role = 'patient';
COMMIT;

DROP DATABASE IF EXISTS grannygrub;
CREATE DATABASE grannygrub;

\c grannygrub;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name  VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR,
  profile_pic VARCHAR
  -- remember to add not null to the password_digest when we start user auth
);

CREATE TABLE grandmas (
  id  SERIAL PRIMARY KEY,
	first_name VARCHAR NOT NULL,
	last_name VARCHAR NOT NULL,
	address VARCHAR NOT NUlL,
	email VARCHAR NOT NULL UNIQUE,
	password_digest VARCHAR,
	profile_pic VARCHAR,
	bio TEXT NOT NULL,
	latitude FLOAT NOT NULL,
	longitude FLOAT NOT NULL
);


INSERT INTO users (first_name, last_name, email, password_digest, profile_pic) VALUES ('Max', 'Mezalon', 'jmezalon@gmail.com', 1234, 'https://media.licdn.com/dms/image/C5603AQGRdf5YV2R8_g/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=RyKqHF_KvRhK4pD2Di5ywRbTVql5MYD_1iHS7ASkoUM'),
('Morteza', 'Khalid', 'Morteza@gmail.com', 1234, 'https://media.licdn.com/dms/image/C4D03AQE9CB7TIg5eUw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=lV3_wJqxHsuwaRh4TvbSVAUehTB1I0QcGVoevo6lZDc'),
('Abid', 'Hussain', 'abidhussain@pursuit.com', 1234, 'https://media.licdn.com/dms/image/C5603AQGwxa271VdxpQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=mxCfVEOzCYyN6XG_xbdhLAOAh7p6SSWLXGTQxYl0G-8'),
('Muna', 'Sherma', 'Munasherma@pursuit.org', 1234, 'https://media.licdn.com/dms/image/C4E03AQGzTZdZzGbevA/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=m1CGlV4WMw2RnacIgPV6cS651fxLqpxf92y2rEI7AkI');

INSERT INTO grandmas (first_name, last_name, address, email, password_digest, profile_pic, bio, latitude, longitude) VALUES
('Granny', 'Anna', '47-10 Austell Pl, Long Island City, 11101', 'grannanna@gmail.com', 1234, 'https://1075koolfm.com/wp-content/uploads/2017/05/made-with-love.jpg', 'I am an old hag that loves cooking and taking care my young people.', 40.742442, -73.941235),
('Granny', 'Bubbu', '1463 E 96th St, Brooklyn NY, 11236', 'granbubbu@yahoo.com', 1234, 'https://i.pinimg.com/originals/f3/01/b2/f301b2da10cf0fa2ec6b35d3616d6ed8.png', 'My grandson told me that my meals are delicious and I wanted to share my good cooking with everyone else to see themselves.', 40.637195, -73.894472);

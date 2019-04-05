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

CREATE TABLE cuisines (
  id SERIAL PRIMARY KEY,
  type  VARCHAR NOT NULL,
  description  VARCHAR NOT NULL,
  img_url  VARCHAR NOT NULL
);

CREATE TABLE dishes (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description  VARCHAR NOT NULL,
  grandma_id INT REFERENCES grandmas(id) ON DELETE CASCADE,
  cuisine_id  INT REFERENCES users(id) ON DELETE CASCADE,
  img_url  VARCHAR NOT NULL,
  price  FLOAT NOT NULL
);


CREATE TABLE reviews (
 id SERIAL PRIMARY KEY,
 stars NUMERIC CHECK(stars <= 5 AND stars >= 1),
 comment  VARCHAR,
 grandma_id INT REFERENCES grandmas(id) ON DELETE CASCADE,
 user_id INT REFERENCES users(id) ON DELETE CASCADE
);


CREATE TABLE favorites(
 id SERIAL PRIMARY KEY,
 user_id INT REFERENCES users(id) ON DELETE CASCADE,
 dish_id INT REFERENCES dishes(id) ON DELETE CASCADE
);

CREATE TABLE orders(
  id SERIAL PRIMARY KEY,
  type VARCHAR NOT NULL,
  dish_id  INT REFERENCES users(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  grandma_id INT REFERENCES grandmas(id) ON DELETE CASCADE
);


CREATE TABLE status(
  id SERIAL PRIMARY KEY,
  order_id  INT REFERENCES orders(id) ON DELETE CASCADE,
  completed  BOOLEAN
);



INSERT INTO users (first_name, last_name, email, password_digest, profile_pic) VALUES ('Max', 'Mezalon', 'jmezalon@gmail.com', 1234, 'https://media.licdn.com/dms/image/C5603AQGRdf5YV2R8_g/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=RyKqHF_KvRhK4pD2Di5ywRbTVql5MYD_1iHS7ASkoUM'),
('Morteza', 'Khalid', 'Morteza@gmail.com', 1234, 'https://media.licdn.com/dms/image/C4D03AQE9CB7TIg5eUw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=lV3_wJqxHsuwaRh4TvbSVAUehTB1I0QcGVoevo6lZDc'),
('Abid', 'Hussain', 'abidhussain@pursuit.com', 1234, 'https://media.licdn.com/dms/image/C5603AQGwxa271VdxpQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=mxCfVEOzCYyN6XG_xbdhLAOAh7p6SSWLXGTQxYl0G-8'),
('Muna', 'Sherma', 'Munasherma@pursuit.org', 1234, 'https://media.licdn.com/dms/image/C4E03AQGzTZdZzGbevA/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=m1CGlV4WMw2RnacIgPV6cS651fxLqpxf92y2rEI7AkI');

INSERT INTO grandmas (first_name, last_name, address, email, password_digest, profile_pic, bio, latitude, longitude) VALUES
('Granny', 'chin', '47-10 Austell Pl, Long Island City, 11101', 'grannanna@gmail.com', 1234, 'http://economists-pick-research.hktdc.com/resources/MI_Portal/Article/rp/2015/07/470473/1436836534321_eChinaSeniors2-p2i_470473.jpg', 'I love cooking and taking care of my young people.', 40.742442, -73.941235),
('Granny', 'Bubbu', '1463 E 96th St, Brooklyn NY, 11236', 'granbubbu@yahoo.com', 1234, 'http://www.historymiami.org/wp-content/uploads/2017/12/gg-e1512752178541-265x300.jpg', 'My grandson told me that my meals are delicious and I wanted to share my good cooking with everyone else to see themselves.', 40.637195, -73.894472),
('Granny', 'mandy', '1250 Rogers Ave, Brooklyn NY, 11226', 'mandygrannyu@hotmail.com', 1234, 'https://steamuserimages-a.akamaihd.net/ugc/498028597176892886/1D8DB1CBEB5BF1F5BECEADB535572E4CBEDB1918/', 'cooking is my life.', 40.639286, -73.951499);


INSERT INTO cuisines (type, description, img_url) VALUES ('Chinese', 'we have delicious meal straight from china', 'http://newsmobile.in/wp-content/uploads/2017/09/Shisen-03.jpg'),
('Haitian', 'you will bite your fingers off', 'https://img.grouponcdn.com/deal/Wmfft8cGxJDQBBejepr/MZ-2976x1786/v1/c700x420.jpg'),
('Italian', 'not just pizza, but a whole lot more', 'https://serafinamia.com/wp-content/uploads/2018/09/10-Italian-Fun-Facts-The-Food-Fashion-and-Culture-of-Italy.jpg');


INSERT INTO dishes (name, description, grandma_id, cuisine_id, img_url, price) VALUES
('chinese orange chicken', 'white rice with chicken and scallion', 1, 1, 'https://s23209.pcdn.co/wp-content/uploads/2013/10/IMG_4012edit1.jpg', 5.73),
('egg rolls', 'great egg rools, you can even add chicken to it.', 1, 1, 'https://i.ytimg.com/vi/MoZAkumC7ps/hqdefault.jpg', 3.75),
('rice with beans gravy and legume', 'the name says it all, now just taste it and see', 2, 2, 'https://i.ytimg.com/vi/ojqGPMv4rBw/maxresdefault.jpg', 9.99),
('fritay', 'you will enjoy this, better than mcdonals fries', 2, 2, 'https://pbs.twimg.com/media/C5eanfJWMAAV4Ot.jpg', 7.89),
('lasagna', 'the best one ever', 3, 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I9R_mZmC8hPg9bml5_sP3YEHjwTpsiLGrwoGkUx8dJDuFkIqQw', 6.89),
('pasta with muscles', 'the best pasta joined together with fresh muscles', 3, 3, 'https://www.italymagazine.com/sites/default/files/styles/624xauto/public/feature-story/leader/smallpasta-with-mussel-and-tomato-s-27497546.jpg?itok=JdjVqu9i', 8.98);

INSERT INTO reviews (stars, comment, grandma_id, user_id) VALUES
(4, 'I enjoyed the meal very much', 3, 1),
(5, 'her food is very delicious', 2, 3),
(5, 'my food was redy on time', 1, 1),
(4.5, 'she was very welcome', 1, 2);

INSERT INTO favorites (user_id, dish_id) VALUES
(1, 4),
(2, 3),
(3, 6),
(4, 1);

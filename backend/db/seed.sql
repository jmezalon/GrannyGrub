DROP DATABASE IF EXISTS grannygrub;
CREATE DATABASE grannygrub;

\c grannygrub;

CREATE TABLE cuisines (
  id SERIAL PRIMARY KEY,
  type  VARCHAR NOT NULL,
  description VARCHAR,
  img_url VARCHAR
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  last_name  VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  phone_number VARCHAR NOT NULL UNIQUE,
  isGrandma BOOLEAN NOT NULL,
  password_digest VARCHAR,
  profile_pic VARCHAR,
  building_number INT,
  address VARCHAR,
  zip_code INT,
  bio TEXT,
	latitude FLOAT,
	longitude FLOAT,
  cuisine_id INT REFERENCES cuisines(id)
);



CREATE TABLE dishes (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  description  VARCHAR NOT NULL,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  cuisine_id  INT REFERENCES cuisines(id) ON DELETE CASCADE,
  img_url  VARCHAR NOT NULL,
  price  FLOAT NOT NULL,
  type VARCHAR NOT NULL,
  timeframe VARCHAR NOT NULL
);

CREATE TABLE labels (
  id SERIAL PRIMARY KEY,
  label_name VARCHAR
);


CREATE TABLE label_dishes (
    id SERIAL PRIMARY KEY,
    dish_id INT REFERENCES dishes(id) ON DELETE CASCADE,
    label_id INT REFERENCES labels(id) ON DELETE CASCADE
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  dish_id  INT REFERENCES dishes(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  isCompleted BOOLEAN
);



-- CREATE TABLE reviews (
--  id SERIAL PRIMARY KEY,
--  stars NUMERIC CHECK(stars <= 5 AND stars >= 1),
--  comment  VARCHAR,
--  -- grandma_id INT REFERENCES grandmas(id) ON DELETE CASCADE,
--  user_id INT REFERENCES users(id) ON DELETE CASCADE
-- );


-- CREATE TABLE favorites(
--  id SERIAL PRIMARY KEY,
--  user_id INT REFERENCES users(id) ON DELETE CASCADE,
--  dish_id INT REFERENCES dishes(id) ON DELETE CASCADE
-- );




INSERT INTO cuisines (type, description, img_url) VALUES ('Chinese', 'we have delicious meal straight from china', 'http://newsmobile.in/wp-content/uploads/2017/09/Shisen-03.jpg'),
('Haitian', 'you will bite your fingers off', 'https://img.grouponcdn.com/deal/Wmfft8cGxJDQBBejepr/MZ-2976x1786/v1/c700x420.jpg'),
('Italian', 'not just pizza, but a whole lot more', 'https://serafinamia.com/wp-content/uploads/2018/09/10-Italian-Fun-Facts-The-Food-Fashion-and-Culture-of-Italy.jpg');

INSERT INTO cuisines (type) VALUES ('Indian'),
('Greek'), ('Polish'),('Mexican'), ('Thia'), ('Turksih'),('Middle-Eastern'), ('Korean'), ('Japanese'),('Filipino'), ('Bengali'), ('Southern');

INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic) VALUES
('Max', 'Mezalon', 'jmezalon@gmail.com', '123-234,4067', false, 1234, 'https://media.licdn.com/dms/image/C5603AQGRdf5YV2R8_g/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=RyKqHF_KvRhK4pD2Di5ywRbTVql5MYD_1iHS7ASkoUM'),
('Morteza', 'Khalid', 'Morteza@gmail.com', '121-234-4567', false, 1234, 'https://media.licdn.com/dms/image/C4D03AQE9CB7TIg5eUw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=lV3_wJqxHsuwaRh4TvbSVAUehTB1I0QcGVoevo6lZDc'),
('Abid', 'Hussain', 'abidhussain@pursuit.com', '123-234-9090', false, 1234, 'https://media.licdn.com/dms/image/C5603AQGwxa271VdxpQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=mxCfVEOzCYyN6XG_xbdhLAOAh7p6SSWLXGTQxYl0G-8'),
('Muna', 'Sharma', 'Munasharma@pursuit.org', '123-234-2222', false, 1234, 'https://media.licdn.com/dms/image/C4E03AQGzTZdZzGbevA/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=m1CGlV4WMw2RnacIgPV6cS651fxLqpxf92y2rEI7AkI');

INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic, building_number, address, zip_code, bio, latitude, longitude, cuisine_id) VALUES

('Debra ', 'Wei', 'grannanna@gmail.com', '123-999-4567', true, 1234, 'http://economists-pick-research.hktdc.com/resources/MI_Portal/Article/rp/2015/07/470473/1436836534321_eChinaSeniors2-p2i_470473.jpg', 47-10, 'Austell Pl, Long Island City', 11101, 'I love cooking and taking care of my young people.', 40.742442, -73.941235, 1),
('Lindy', 'Joseph', 'granbubbu@yahoo.com', '123-999-0987', true, 1234, 'http://www.historymiami.org/wp-content/uploads/2017/12/gg-e1512752178541-265x300.jpg', 1463, 'E 96th St, Brooklyn NY', 11236, 'My grandson told me that my meals are delicious and I wanted to share my good cooking with everyone else to see themselves.',  40.637195, -73.894472, 2),
('Kaira', 'Olivier','mandygrannyu@hotmail.com', '123-219-4567', true, 1234,'https://steamuserimages-a.akamaihd.net/ugc/498028597176892886/1D8DB1CBEB5BF1F5BECEADB535572E4CBEDB1918/', 1250, 'Rogers Ave, Brooklyn NY', 11226, 'cooking is my life.', 40.639286, -73.951499, 3);


INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic,  building_number, address, zip_code, bio, latitude, longitude, cuisine_id) VALUES ('Asil ', 'Demir', 'Asildemir@gmail.com', '323-909-4062', true, 1234,'https://external-preview.redd.it/cPPIF6OlEUUtLBovAUghOlj3ghBc-xbWzaFOsCX_N40.jpg?auto=webp&s=4e4bf2613036d32207ba74916864e02bd27b110b', 9039, 'Theatre Drive, New York', 10024, 'Cooking makes me happy!', 40.711161, -74.007271, 9),
('Kiral ', 'Osman', 'KOsman@gmail.com','323-909-4962', true, 1234, 'https://preview.redd.it/sufregue6pn21.jpg?width=640&crop=smart&auto=webp&s=090b17352883a36f81064e74fda1077a09a2b60f', 9430 ,'Vale Street
Rego Park', 11374, 'I love my grandchildren!!', 40.726729, -73.86152, 9),('Miki', 'Tanaka', 'MTanaka@gmail.com','323-081-3098', true, 1234, 'https://preview.redd.it/p0nuzgms2c211.jpg?width=640&crop=smart&auto=webp&s=59a77c856454abc3fe03ca7ff65e644ec43e2aca', 14  ,'Briarwood Lane
Fresh Meadows', 11365, 'Cooking makes me happy!', 40.739381, -73.793039, 12);

INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic,  building_number, address, zip_code, bio, latitude, longitude, cuisine_id) VALUES ('Lena ', 'Ali', 'LenaAli@gmail.com', '323-809-4062', true, 1234,'https://preview.redd.it/nmibyopd3kn21.jpg?width=640&crop=smart&auto=webp&s=b202704ab86e0271dd2fa9dc9b97d06387cb062b', 6, 'Ann Ave, Woodside', 11377, 'Everyone is welcome here!!', 40.74462, -73.904361, 10),
('Cynthia ', 'Nikolaidis', 'CNikolaidis@gmail.com','917-909-4962', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/180310_1456163396622_2274193_n.jpg?_nc_cat=102&_nc_ht=scontent-lga3-1.xx&oh=3ab614c0937832739b0c4a8e28392866&oe=5D320678', 46 ,'Charles Ave, Staten Island', 10312, 'I love my grandchildren!!', 40.535385, -74.161575, 5), ('Pamela', 'Papantoniou', 'pamelaPap@gmail.com','909-081-3098', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/s403x403/378205_502769929738427_1214178709_n.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=b3cc12890f39199d6787af8b8bfe328c&oe=5D42B1EF', 7688  ,'Ramblewood St, Jackson Heights', 11372,
'Cooking makes me very happy!', 40.751948, -73.883959, 5);


INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price, type, timeframe) VALUES ('Tarator-style salmon', 'Salmon fillets are topped with walnuts, parsley, sumac onion and hummus in this Middle Eastern inspired fish dish', 8, 10, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/tarator-style-salmon.jpg?itok=p1JuHet5', 5.73, 'pick-up', '1:00 - 3:00'),
('Spiced cauliflower with chickpeas, herbs & pine nuts', 'Roast cauliflower with cumin and caraway then serve with healthy chickpeas and herbs in this Middle Eastern-style salad', 11, 10, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--983480_10.jpg?itok=z3XvGH3-', 3.75, 'sit-down', '3:00'),
('Japanese okonomiyaki', 'This Japanese pancake is full of authentic flavours and textures, with fresh squid or prawns and a mirin and a honey sauce. Garnish with bonito flakes', 10, 12, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/okonomiyaki.jpg?itok=xyEqSNSU', 9.99, 'sit-down','12:00 - 2:00'),
('Taramasalata', 'This creamy blend of pink or white fish roe, with either a potato or bread base, is best with a drizzle of virgin olive oil or a squeeze of lemon.', 12, 5, 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/08/taramasalata.jpg', 7.99, 'pick-up','12:00 - 2:00'),
('Japanese katsudon', 'Use up leftovers and provide a hearty meal with this tasty pork katsudon. Using our tonkatsu recipe, it is great to make the day after a Japanese feast', 10, 12, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/04/the-day-after-dish-katsudon.jpg?itok=xxTIulFS', 8.89, 'sit-down','7:00'),
('chinese orange chicken', 'white rice with chicken and scallion', 7, 1, 'https://s23209.pcdn.co/wp-content/uploads/2013/10/IMG_4012edit1.jpg', 5.73, 'pick-up', '11:00 - 1:00'),
('egg rolls', 'great egg rools, you can even add chicken to it.', 5, 1, 'https://i.ytimg.com/vi/MoZAkumC7ps/hqdefault.jpg', 3.75, 'sit-down', '6:00'),
('rice with beans gravy and legume', 'the name says it all, now just taste it and see', 6, 2, 'https://i.ytimg.com/vi/ojqGPMv4rBw/maxresdefault.jpg', 9.99, 'sit-down','3:00'),
('fritay', 'you will enjoy this, better than mcdonals fries', 5, 2, 'https://pbs.twimg.com/media/C5eanfJWMAAV4Ot.jpg', 7.89, 'sit-down','7:00'),
('lasagna', 'the best one ever', 7, 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I9R_mZmC8hPg9bml5_sP3YEHjwTpsiLGrwoGkUx8dJDuFkIqQw', 6.89,'pick-up','6:00 - 8:00'),
('Moussaka', 'Variations on moussaka are found throughout the Mediterranean and the Balkans.', 13, 5, 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/08/moussaka.jpg', 7.89, 'sit-down','7:00'),
('Grilled meat', 'Greece’s favourite fast food, served on chopped tomatoes and onions in pitta bread with lashings of tzatziki.', 12, 5, 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/08/grilled-lamb.jpg', 6.89,' sit-down','6:30'),
('pasta with muscles', 'the best pasta joined together with fresh muscles', 6, 3, 'https://www.italymagazine.com/sites/default/files/styles/624xauto/public/feature-story/leader/smallpasta-with-mussel-and-tomato-s-27497546.jpg?itok=JdjVqu9i', 8.98,'pick-up', '12:00 - 2:00'),
('Turkish lamb pilau', 'Serve up a basmati rice one pot flavoured with cinnamon, mint and apricot, studded with tender lamb', 9, 9, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1069491_11.jpg?itok=bILjdz8R', 8.98,'pick-up', '12:00 - 2:00'),
('5-ingredient falafel', 'Make falafel with just a handful of storecupboard ingredients. To give the falafels a better texture, be sure to use dried chickpeas rather than canned', 11, 10, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/08/falafel.jpg?itok=kESclYaT', 4.98,'pick-up', '12:00 - 2:00');

INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price, type, timeframe) VALUES

-- indian
('Tomato Upma', 'a tangy and spicy upma made with sooji-rave cream of wheat, tomatoes and spices.', 7, 4, 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/01/tomato-upma-recipe-2.jpg', 5.73, 'pick-up', '11:00 - 1:00'),
('Varan Bhaat', 'best serve with steamed rice', 7, 4, 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/09/varan-bhaat-recipe.jpg', 5.75, 'sit-down', '5:30'),


-- polish
('Piernik', 'A classic Polish honey gingerbread cake is adapted by Edd Kimber. It is layered with plum jam and coated in chocolate with sprinkles of edible gold.', 5, 6, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/gingerbread.jpg?itok=kvqzFGWA', 3.75, 'sit-down', '6:00'),
('Polish sausage soup', 'Fry the onions in the oil for 5 mins. Add the garlic and sausage, fry for a few mins more, then stir in the paprika, rice and thyme.', 6, 6, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--9650_12.jpg?itok=JcuAdP0C', 5.98,'pick-up', '10:00 - 12:00'),
('Inside-out chicken Kiev', 'Place the chicken on a baking tray, rub with a little of the butter, season and cook under the grill for 15 mins, turning once until cooked through.', 7, 6, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--520471_11.jpg?itok=6JxupEw4', 9.73, 'pick-up', '1:00 - 2:00');


INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price, type, timeframe) VALUES

-- mexican
('Mexican penne with avocado', 'Get all five of your 5-a-day in this mildly spiced, healthy pasta dish. It is rich in iron, fibre and vitamin C as well as being low-fat and low-calorie', 6, 7, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/mexican-penne.jpg?itok=Me76nQgF', 9.99, 'pick-up','2:00 - 4:00'),
('Mexican bake', 'Raid your storecupboard and try out this fresh idea for canned beans with fajita spices - top with tortillas and cheese', 5, 7, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1096460_11.jpg?itok=LCx-8aST', 7.75, 'sit-down', '6:00'),

-- thai
('Thai pork & peanut curry', 'Use fragrant hot red curry paste as the base to this coconut curry dish with baby sweetcorn, coriander and soy', 5, 8, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1173688_12.jpg?itok=SupgDzZY', 7.89, 'sit-down','7:00'),
('Thai chicken curry', 'Peel shallots or onion and cut in half from top to root. Lay the cut sides flat on a board and thinly slice.', 7, 8, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1035606_11.jpg?itok=3ny7oaux', 6.89,' pick-up','6:00 - 8:00');


INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price, type, timeframe) VALUES
-- korean
('Korean-style fried rice', 'This speedy Korean dish is super satisfying and a great way to use up leftover cooked rice - it is full of iron too', 6, 11, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/01/korean-style-fried-rice.jpg?itok=OWPmym9e', 9.99, 'sit-down','2:00'),
('Korean chicken wings with sesame slaw', 'Gochujang is a savoury Korean condiment that adds a rich spiciness to these chicken wings. Drizzle with sesame oil and our crunchy side slaw', 5, 11, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/02/korean-wings.jpg?itok=5YQZPdmc', 7.89, 'sit-down','7:00'),

-- filipino
('Pork & caramelised pineapple adobo', 'This Filipino adobo with sharp, salty-sweet notes is well worth the effort. It is a hearty stew with chunks of melt-in-the-mouth pork belly', 7, 13, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/02/pork-adobo.jpg?itok=o0Eztwxk', 6.89, 'pick-up','6:00 - 8:00');

INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price, type, timeframe) VALUES

-- bengali
('Bengali mustard fish', 'A simple seafood curry of white fish, tomatoes and whole green chillies that is deliciously spicy, healthy and quick enough for every day', 7, 14, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/bengali-mustard-fish_0.jpg?itok=KfunH1Zb', 5.73, 'sit-down', '1:00'),

-- southern
('Southern-style mac ‘n’ cheese', 'Round out this cheesy pasta classic with roasted sweet potato, a staple food in the southern US states, and turn up the temperature with a pinch of cayenne', 7, 15, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/mac-n-cheese.jpg?itok=vs4eBfiK', 10.89,' pick-up','6:00 - 8:00'),
('Southern fried chicken', 'Great for feeding a crowd, simply kick back, enjoy and relax this fried chicken recipe with homemade slaw', 6, 15, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273636_8.jpg?itok=VxE-1zWU', 8.98,'pick-up', '12:00 - 2:00');



INSERT INTO labels (label_name) VALUES ('Kosher'), ('Vegetarian'), ('Vegan'), ('Halal'), ('Gluten-Free'), ('Contains-dairy'), ('Contains-Eggs'), ('Contains-peanuts'), ('Contains-nuts'), ('Contains-Shellfish'), ('Soul food'), ('Keto');


INSERT INTO label_dishes (dish_id, label_id) VALUES (1, 5), (2, 2),(2, 4), (3, 3), (3, 3), (4, 1), (4,8), (5,1), (5,6), (5,7), (6, 10), (6,6);


-- INSERT INTO reviews (stars, comment, user_id) VALUES
-- (4, 'I enjoyed the meal very much', 6),
-- (5, 'her food is very delicious', 4),
-- (5, 'very nice company', 1),
-- (4.5, 'she was very welcome', 5);

-- INSERT INTO favorites (user_id, dish_id) VALUES
-- (5, 4),
-- (6, 3),
-- (7, 2),
-- (6, 1);



-- INSERT INTO users (first_name, last_name, email, password_digest, profile_pic) VALUES ('Max', 'Mezalon', 'jmezalon@gmail.com', 1234, 'https://media.licdn.com/dms/image/C5603AQGRdf5YV2R8_g/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=RyKqHF_KvRhK4pD2Di5ywRbTVql5MYD_1iHS7ASkoUM'),
-- ('Morteza', 'Khalid', 'Morteza@gmail.com', 1234, 'https://media.licdn.com/dms/image/C4D03AQE9CB7TIg5eUw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=lV3_wJqxHsuwaRh4TvbSVAUehTB1I0QcGVoevo6lZDc'),
-- ('Abid', 'Hussain', 'abidhussain@pursuit.com', 1234, 'https://media.licdn.com/dms/image/C5603AQGwxa271VdxpQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=mxCfVEOzCYyN6XG_xbdhLAOAh7p6SSWLXGTQxYl0G-8'),
-- ('Muna', 'Sherma', 'Munasherma@pursuit.org', 1234, 'https://media.licdn.com/dms/image/C4E03AQGzTZdZzGbevA/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=m1CGlV4WMw2RnacIgPV6cS651fxLqpxf92y2rEI7AkI');

DROP DATABASE IF EXISTS grannygrub;
CREATE DATABASE grannygrub;

\c grannygrub;


CREATE TABLE cuisines (
  id SERIAL PRIMARY KEY,
 type VARCHAR NOT NULL,
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
  isPublic BOOLEAN,
  isPickup BOOLEAN,
  isDelivery BOOLEAN,
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
  date Date,
  timeframe VARCHAR NOT NULL,
  quantity  INT NOT NULL,
  remaining_quantity INT
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
  name VARCHAR NOT NULL,
  phone_number VARCHAR NOT NULL,
  dish_id  INT REFERENCES dishes(id) ON DELETE CASCADE,
  user_id INT REFERENCES users(id) ON DELETE CASCADE,
  isCompleted BOOLEAN,
  order_type VARCHAR
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
('Greek'), ('Polish'),('Mexican'), ('Thai'), ('Turkish'),('Middle-Eastern'), ('Latin'), ('Japanese'),('Bengali'), ('Southern'),('American');

INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic) VALUES
('Max', 'Mezalon', 'jmezalon@gmail.com', '123-234,4067', false, 1234, 'https://media.licdn.com/dms/image/C5603AQGRdf5YV2R8_g/profile-displayphoto-shrink_200_200/0?e=1559779200&v=beta&t=RyKqHF_KvRhK4pD2Di5ywRbTVql5MYD_1iHS7ASkoUM'),
('Morteza', 'Khalid', 'Morteza@gmail.com', '121-234-4567', false, 1234, 'https://media.licdn.com/dms/image/C4D03AQE9CB7TIg5eUw/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=lV3_wJqxHsuwaRh4TvbSVAUehTB1I0QcGVoevo6lZDc'),
('Abid', 'Hussain', 'abidhussain@pursuit.com', '123-234-9090', false, 1234, 'https://media.licdn.com/dms/image/C5603AQGwxa271VdxpQ/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=mxCfVEOzCYyN6XG_xbdhLAOAh7p6SSWLXGTQxYl0G-8'),
('Muna', 'Sharma', 'Munasharma@pursuit.org', '123-234-2222', false, 1234, 'https://media.licdn.com/dms/image/C4E03AQGzTZdZzGbevA/profile-displayphoto-shrink_800_800/0?e=1559779200&v=beta&t=m1CGlV4WMw2RnacIgPV6cS651fxLqpxf92y2rEI7AkI');

INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic, building_number, address, zip_code, bio, latitude, longitude, isPublic, isPickup, isDelivery, cuisine_id) VALUES

('Debra ', 'Wei', 'grannanna@gmail.com', '123-999-4567', true, 1234, 'http://economists-pick-research.hktdc.com/resources/MI_Portal/Article/rp/2015/07/470473/1436836534321_eChinaSeniors2-p2i_470473.jpg', 47-10, 'Austell Pl, Long Island City', 11101, 'I shop at Costco. Its much easier to make in bulk, trust me.', 40.742442, -73.941235, false, true, true, 1),
('Lindy', 'Joseph', 'granbubbu@yahoo.com', '123-999-0987', true, 1234, 'http://www.historymiami.org/wp-content/uploads/2017/12/gg-e1512752178541-265x300.jpg', 1463, 'E 96th St, Brooklyn NY', 11236, 'My grandson told me that my meals are delicious and I wanted to share my good cooking with everyone else to see themselves.',  40.637195, -73.894472, true, true, true, 2),
('Kaira', 'Olivier','mandygrannyu@hotmail.com', '123-219-4567', true, 1234,'https://steamuserimages-a.akamaihd.net/ugc/498028597176892886/1D8DB1CBEB5BF1F5BECEADB535572E4CBEDB1918/', 1250, 'Rogers Ave, Brooklyn NY', 11226, 'cooking is my life.', 40.639286, -73.951499, false, false, true, 3);


INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic,  building_number, address, zip_code, bio, latitude, longitude, isPublic, isPickup, isDelivery, cuisine_id) VALUES
('Asil ', 'Demir', 'Asildemir@gmail.com', '323-909-4062', true, 1234,'https://external-preview.redd.it/cPPIF6OlEUUtLBovAUghOlj3ghBc-xbWzaFOsCX_N40.jpg?auto=webp&s=4e4bf2613036d32207ba74916864e02bd27b110b', 9039, 'Theatre Drive, New York', 10024, 'Cooking makes me happy!', 40.711161, -74.007271, true, false, true, 9),
('Kiral ', 'Osman', 'KOsman@gmail.com','323-909-4962', true, 1234, 'https://preview.redd.it/sufregue6pn21.jpg?width=640&crop=smart&auto=webp&s=090b17352883a36f81064e74fda1077a09a2b60f', 9430 ,'Vale Street

Rego Park', 11374, 'I love to cook, and i’m grateful to share it!!', 40.726729, -73.86152, false, false, true,9),

('Miki', 'Tanaka', 'MTanaka@gmail.com','323-081-3098', true, 1234, 'https://preview.redd.it/p0nuzgms2c211.jpg?width=640&crop=smart&auto=webp&s=59a77c856454abc3fe03ca7ff65e644ec43e2aca', 14 ,'Briarwood Lane
Fresh Meadows', 11365, 'Happiness is warming up someones day with soup, you made from an old family recipe!', 40.739381, -73.793039, false, false, true, 12);

INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic,  building_number, address, zip_code, bio, latitude, longitude, isPublic,isPickup, isDelivery, cuisine_id) VALUES

('Lena ', 'Ali', 'LenaAli@gmail.com', '323-809-4062', true, 1234,'https://preview.redd.it/nmibyopd3kn21.jpg?width=640&crop=smart&auto=webp&s=b202704ab86e0271dd2fa9dc9b97d06387cb062b', 6, 'Ann Ave, Woodside', 11377, 'I used to cook for a village, now i don’t know how not to.', 40.74462, -73.904361, true, false, true, 10),

('Cynthia ', 'Nikolaidis', 'CNikolaidis@gmail.com','917-909-4962', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/180310_1456163396622_2274193_n.jpg?_nc_cat=102&_nc_ht=scontent-lga3-1.xx&oh=3ab614c0937832739b0c4a8e28392866&oe=5D320678', 46 ,'Charles Ave, Staten Island', 10312, 'I want to give the food thats brought me the most comfort', 40.535385, -74.161575, false, false, true, 5),
('Farha ', 'Qureshi', 'farhaQs@gmail.com', '929-809-4062', true, 1234,'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/17191280_1012718378861105_4456290895696198744_n.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=7f7bddeda0e547cea07ffbdf5a7b6bf5&oe=5D389F2E', 223, 'Newcastle Dr, Jamaicae', 11432, 'Coming to america, my food, was the only way I could feel at home, i hope i can share that with anyone homesick ', 40.715188, -73.792888, false, false, true, 4),

('Pamela', 'Papantoniou', 'pamelaPap@gmail.com','909-081-3098', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/s403x403/378205_502769929738427_1214178709_n.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=b3cc12890f39199d6787af8b8bfe328c&oe=5D42B1EF', 7688  ,'Ramblewood St, Jackson Heights', 11372,
'I don’t know how to cook for a few, I’d rather feed everyone i can', 40.751948, -73.883959, false, false, true,5);


INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic,  building_number, address, zip_code, bio, latitude, longitude, isPublic, isPickup, isDelivery, cuisine_id) VALUES
('Naseem ', 'Khan', 'naseemKhan@gmail.com','917-919-5962', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/38700_104063922984070_517661_n.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=488ae51078dc3d240e57649a105d5d3b&oe=5D3F2020', 63 ,'Old Country St,
Brooklyn', 11233, 'I love my grandchildren!!', 40.67783, -73.919096, true, false, true, 4), ('Karolina',
'Brendowska', 'polishGma@gmail.com','919-681-3798', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/264349_108704745889039_1915707_n.jpg?_nc_cat=106&_nc_ht=scontent-lga3-1.xx&oh=816a4eea9ad48d6c28b551b7a962e812&oe=5D3BD9D6', 9781  ,'Goldfield Street, Brooklyn', 11211, 'Cooking makes me very happy!', 40.712587, -73.950866, false, false, true, 6);

INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic,  building_number, address, zip_code, bio, latitude, longitude, isPublic, isPickup, isDelivery, cuisine_id) VALUES ('Marie ', 'Pastorino', 'maroeP@gmail.com', '919-810-4062', true, 1234,'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/283973_435238149860470_307754462_n.jpg?_nc_cat=106&_nc_ht=scontent-lga3-1.xx&oh=b7aec7361b720688c301571f2adaed8e&oe=5D2A05EC',175, ' Norman Ave, Brooklyn', 11222, 'I cook what I love!', 40.72692, -73.94725, true, true, true, 6),
('Sylvia', 'Piotrowski', 'Sylviapio@gmail.com','927-919-6902', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-0/p228x119/431084_2790698652891_1639254729_n.jpg?_nc_cat=103&_nc_ht=scontent-lga3-1.xx&oh=c358e4cb164217af42c59aa134bb0773&oe=5D4743DD', 9909 ,'Center St, Brooklyn', 11234, 'I really love my grandchildren!!',  40.673389, -73.997964, false, false, true, 6),
('Ibtisam', 'Amous', 'samAmous@gmail.com','929-964-6902', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/49831893_10156463737872017_524413204739129344_n.jpg?_nc_cat=107&_nc_ht=scontent-lga3-1.xx&oh=e880d5bbd481344a4d3f4299be398f47&oe=5D547D27', 87 ,'Magnolia Street, Flushing ', 11355, 'I really love my grandchildren!!', 40.751021, -73.821798, false, true, true, 10),


('Jeana', 'Azar', 'phulla@gmail.com', '959-810-4062', true, 1234,'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/37181317_10212342874474409_7526437566376050688_n.jpg?_nc_cat=111&_nc_ht=scontent-lga3-1.xx&oh=1d0254b068bc35aa98d24e8274030941&oe=5D651B0B', 144, ' Marsh St, Bronx,', 10453, 'I make food from the heart, with just enough salt', 40.852346, -73.91222, true, false, true, 14),


('Jasmine', 'Gaines', 'fillin@gmail.com','927-951-6902', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t31.0-8/170791_185973308103983_698815_o.jpg?_nc_cat=109&_nc_ht=scontent-lga3-1.xx&oh=bf7ec26dc132edfa02217a4d163a5f93&oe=5D5E4242', 94,' Wild Horse Drive, Brooklyn', 11233, 'DJ Khaled hired me to be his chef first, but my food was too spicy for him, i only used black pepper', 40.67783, -73.919096, false, false, true, 15),

('Nipapun', 'Tanasootr', 'NTanasootr@gmail.com','909-164-6902', true, 1234, 'https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/53480594_386776818782513_2756106975136710656_n.jpg?_nc_cat=100&_nc_ht=scontent-lga3-1.xx&oh=e6c7d641b2536b2270b5334caf7416d8&oe=5D2ADEBE', 9825 ,'West Mammoth Drive, New York', 10011, 'I can make anything taste better than meat, and just as filling', 40.741625, -74.000479, true, false, true, 8);

INSERT INTO users (first_name, last_name, email, phone_number, isGrandma, password_digest, profile_pic,  building_number, address, zip_code, bio, latitude, longitude, isPublic, isPickup, isDelivery, cuisine_id) VALUES

('Zoila', 'Tejada', 'zoilaTejada@gmail.com','997-991-6902', true, 1234, 'https://drscdn.500px.org/photo/305423389/m%3D900/v2?user_id=7691381&webp=true&sig=403c94d3822506a4d52d04e740298dab752ce06918453ac81d83b38cf3700d9e', 8974, 'E. Fawn St, Woodside', 11377, 'DJ Khaled hired me to be his chef first, but my food was too spicy for him, i only used black pepper',40.735515, -73.907802, false, true, true, 7),

('Amilia', 'Cabrera', 'gCabrera@gmail.com','977-991-6902', true, 1234, 'https://live.staticflickr.com/2913/32760510623_a997e2276b_b.jpg', 358 , 'East Mountainview St', 11691, 'I make food from the heart, with just enough salt',40.599546, -73.750523, false, true, true, 7);






INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price,  date, timeframe, quantity) VALUES ('Tarator-style salmon', 'Salmon fillets are topped with walnuts, parsley, sumac onion and hummus in this Middle Eastern inspired fish dish', 8, 10, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/tarator-style-salmon.jpg?itok=p1JuHet5', 5.75,'2019-05-21', 'Lunch', 5),
('Spiced cauliflower with chickpeas, herbs & pine nuts', 'Roast cauliflower with cumin and caraway then serve with healthy chickpeas and herbs in this Middle Eastern-style salad', 11, 10, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--983480_10.jpg?itok=z3XvGH3-', 3.75,'2019-05-21', 'Lunch', 8),
('Mulukhiyah with Chicken & rice', 'Tossa jute plant based stew cooked with chunks of boneless chicken breast and served with rice and freshly squeezed lemon', 11, 10, 'https://thefooddoctor.files.wordpress.com/2017/05/mulukhyia-a-stew-fit-for-royals.jpg?w=800', 10.75,'2019-05-21', 'Lunch', 8),
('Japanese okonomiyaki', 'This Japanese pancake is full of authentic flavours and textures, with fresh squid or prawns and a mirin and a honey sauce. Garnish with bonito flakes', 10, 12, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/12/okonomiyaki.jpg?itok=xyEqSNSU', 9.99,'2019-05-21','Lunch',9),
('Taramasalata', 'This creamy blend of pink or white fish roe, with either a potato or bread base, is best with a drizzle of virgin olive oil or a squeeze of lemon.', 12, 5, 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/08/taramasalata.jpg', 7.99,'2019-05-21','Lunch', 6),

('Japanese katsudon', 'Use up leftovers and provide a hearty meal with this tasty pork katsudon. Using our tonkatsu recipe, it is great to make the day after a Japanese feast', 10, 12, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/04/the-day-after-dish-katsudon.jpg?itok=xxTIulFS', 8.89,'2019-05-21','Dinner', 10),

('Chinese Chicken Soup', 'If you’re feeling under the weather or just want a pick-me-up—this herb-packed chicken soup can get you back up on your feet in no time!', 5, 1, 'https://www.waitrose.com/content/dam/waitrose/recipes/images/g/Ginger-chicken-noodle-soup.jpg/_jcr_content/renditions/cq5dam.thumbnail.400.400.png', 10.75, '2019-05-21','Dinner', 7),


('Chinese orange chicken', 'White rice with chicken and scallion', 5, 1, 'https://s23209.pcdn.co/wp-content/uploads/2013/10/IMG_4012edit1.jpg', 15.75, '2019-05-22','Lunch',6),


('Rice with beans gravy and legume', 'the name says it all, now just taste it and see', 6, 2, 'https://i.ytimg.com/vi/ojqGPMv4rBw/maxresdefault.jpg', 9.99,'2019-05-23','Lunch',6),

('Fritay', 'Fried deliciousness ', 6, 2, 'https://pbs.twimg.com/media/C5eanfJWMAAV4Ot.jpg', 7.89,'2019-05-27','Dinner',8),

('Lasagna', 'The best one ever', 7, 3, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-I9R_mZmC8hPg9bml5_sP3YEHjwTpsiLGrwoGkUx8dJDuFkIqQw', 10.88,'2019-05-21','Dinner',8),


('Moussaka', 'Variations on moussaka are found throughout the Mediterranean and the Balkans.', 13, 5, 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/08/moussaka.jpg', 10.89,'2019-05-21','Dinner',7),

('Fassolatha ', 'White bean soup with chucnks of beef and tomatoes. Served with a side of rice.', 13, 5, 'https://www.thespruceeats.com/thmb/QB8oe6mG2lm4ixQukQENIj5u01s=/1629x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bowl-of-vegetable-soup-175385194-5818a0983df78cc2e8990bc1.jpg', 10.89,'2019-05-21','Dinner',7),

('Grilled meat', 'Greece’s favourite fast food, served on chopped tomatoes and onions in pitta bread with lashings of tzatziki.', 12, 5, 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2018/08/grilled-lamb.jpg', 16.89,'2019-05-21','Dinner',10),

('Pasta with muscles', 'The best pasta joined together with fresh muscles', 7, 3, 'https://www.italymagazine.com/sites/default/files/styles/624xauto/public/feature-story/leader/smallpasta-with-mussel-and-tomato-s-27497546.jpg?itok=JdjVqu9i', 15.99, '2019-05-22','Lunch', 9),

--turkish

('Turkish lamb pilau', 'Serve up a basmati rice one pot flavoured with cinnamon, mint and apricot, studded with tender lamb', 9, 9, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1069491_11.jpg?itok=bILjdz8R', 16.99,'2019-05-21', 'Lunch', 8),


('Turkish Beef Kufta', 'Served with french fries, rice and tomatoes with a side of jalapeno yodurt suauce.', 9, 9, 'https://www.recipetineats.com/wp-content/uploads/2016/02/Turkish-Kebabs-1_3.jpg', 12.99,'2019-05-21', 'Dinner', 8),

('Turkish Chicken Kebab', 'The chicken is placed overnight in a simple marinade made from plain yogurt, onion, garlic, and spices. Served with a side of Rice', 8, 9, 'https://images.media-allrecipes.com/userphotos/720x405/5827752.jpg', 13.75,'2019-05-21', 'Lunch', 9),

-- middle Eastern

('Palestinian falafel', '6 pieces of falafel with a side of hummus and tahini to dip.', 19, 10, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/08/falafel.jpg?itok=kESclYaT', 4.9, '2019-05-23','Lunch', 8),

('Palestinian Maqluba', 'Stewed chicken, rice and fried vegetables. the rice is richly spiced with cinnamon, allspice and more.', 19, 10, 'https://static01.nyt.com/images/2017/01/08/magazine/08eat/08eat-articleLarge-v2.jpg', 14.99, '2019-05-23','dinner', 8);


INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price,  date, timeframe, quantity) VALUES

-- indian

('Tomato Upma', 'A tangy and spicy upma made with sooji-rave cream of wheat, tomatoes and spices.', 14, 4, 'https://www.vegrecipesofindia.com/wp-content/uploads/2016/01/tomato-upma-recipe-2.jpg', 5.75, '2019-05-23', 'Lunch', 10),

('Chicken tikka masala', 'Aromatic golden chicken pieces swimming in an incredible and spicy curry sauce. Served with jasmine rice', 15, 4,'https://twosleevers.com/wp-content/uploads/2017/05/Instant-Pot-Chicken-Tikka-Masala.jpg', 5.75, '2019-05-23', 'Lunch', 10),

('Varan Bhaat', 'Best serve with steamed rice', 15, 4, 'https://www.vegrecipesofindia.com/wp-content/uploads/2013/09/varan-bhaat-recipe.jpg', 5.75, '2019-05-22', 'Dinner',9),


-- polish
('Piernik', 'A classic Polish honey gingerbread cake is adapted by Edd Kimber. It is layered with plum jam and coated in chocolate with sprinkles of edible gold.', 16, 6, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/gingerbread.jpg?itok=kvqzFGWA', 3.75, '2019-05-20','Dinner',6),


('Pierogi Ruskie', ' Pierogis made with Potato & Cheese. 6 Pierogis per serving', 16, 6, 'https://www.mygourmetconnection.com/wp-content/uploads/potato-and-cheese-pierogi-680x454.jpg', 8.75, '2019-05-20','Dinner',6),

('Polish sausage soup', 'Fried the onions, garlic and sausage, with paprika,rice and thyme.', 17, 6, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--9650_12.jpg?itok=JcuAdP0C', 15.99, '2019-05-22','Lunch',5),


('Polish potato pancakes', 'Delicious potato pancakes with a generous amount of mushroom sauce. 3 pancakes per serving', 17, 6, 'https://s3.envato.com/files/261599890/img_8024.jpg', 15.99, '2019-05-22','Lunch',5),

('Inside-out chicken puff', 'Chicken, a little bit of butter,and veggies ', 18, 13, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--520471_11.jpg?itok=6JxupEw4', 9.75, '2019-05-21','Lunch',7),

('Bigos Hunters Stew', 'Beef sausage, sauerkraut, chunks of beef and cabbage ', 18, 13, 'https://paleoleap.com/pictures/bigos.jpg', 9.75, '2019-05-21','Dinner',7);



INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price, date, timeframe, quantity) VALUES

-- mexican

('Mexican penne with avocado', 'Get all five of your 5-a-day in this mildly spiced, healthy pasta dish. It is rich in iron, fibre and vitamin C as well as being low-fat and low-calorie', 23, 7, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/11/mexican-penne.jpg?itok=Me76nQgF', 9.99,'2019-05-21','Dinner',9),

('Mexican bake', 'Raid your storecupboard and try out this fresh idea for canned beans with fajita spices - top with tortillas and cheese', 23, 7, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1096460_11.jpg?itok=LCx-8aST', 7.75, '2019-05-22','Dinner',8),


-- thai
('Thai pork & peanut curry', 'Use fragrant hot red curry paste as the base to this coconut curry dish with baby sweetcorn, coriander and soy', 22, 8, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1173688_12.jpg?itok=SupgDzZY', 7.89,'2019-05-22','Dinner',8),
('Thai chicken curry', 'Peel shallots or onion and cut in half from top to root. Lay the cut sides flat on a board and thinly slice.', 22, 8, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1035606_11.jpg?itok=3ny7oaux', 6.89,'2019-05-21','Dinner',6);


INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price,  date, timeframe,quantity) VALUES
-- korean
('Chinese-style fried rice', 'This speedy Chinese dish is super satisfying and a great way to use up leftover cooked rice - it is full of iron too', 5, 11, 'https://www.gimmesomeoven.com/wp-content/uploads/2017/07/How-To-Make-Fried-Rice-Recipe-3-1.jpg', 9.99,'2019-05-21','Lunch', 8),

(' Deep fried chicken wings', 'Six wings per serving. Gochujang is a savoury condiment that adds a rich spiciness to the chicken wings. Drizzled with sesame oil with a side of my crunchy side slaw', 5, 14, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/02/korean-wings.jpg?itok=5YQZPdmc', 7.89,'2019-05-21','Dinner', 10),

--add dishes for users 6 and 21

('Pork & caramelised pineapple adobo', 'Sharp, salty-sweet notes is well worth the effort. It is a hearty stew with chunks of melt-in-the-mouth pork belly', 24, 13, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2017/02/pork-adobo.jpg?itok=o0Eztwxk', 6.89,'2019-05-21','Dinner',11);

INSERT INTO dishes (name, description, user_id, cuisine_id, img_url, price,  date, timeframe, quantity) VALUES

-- bengali
('Bengali mustard fish', 'A simple seafood curry of white fish, tomatoes and whole green chillies that is deliciously spicy and healthy', 14, 10, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/bengali-mustard-fish_0.jpg?itok=KfunH1Zb', 10.50, '2019-05-21','Lunch',8),

('Cochinita Pibil', 'Mexican cochinita pibil, or pulled pork shoulder marinated and braised in achiote paste, orange juice, and lime.', 24, 15, 'https://images.media-allrecipes.com/userphotos/250x250/65569.jpg', 13.99,'2019-05-21', 'Dinner',8),

-- southern

('Southern-style mac ‘n’ cheese with collard green', 'Round out this cheesy pasta classic with roasted sweet potato, a staple food in the southern US states, and turn up the temperature with a pinch of cayenne', 20, 14, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/mac-n-cheese.jpg?itok=vs4eBfiK', 10.75,'2019-05-21','Dinner',8),

('Cajun shrimp and grits', 'Cajun Shrimp and Grits- Creamy Grits with Cajun Shrimp , a Southern Classic Elevated! With Bold and Spicy Seasonings', 20, 14, 'https://www.familysavvy.com/wp-content/uploads/2012/11/Screen-Shot-2015-03-01-at-10.15.23-AM.png',15.99,'2019-05-21','Dinner',8),

('Southern fried chicken', 'Great for feeding a crowd, simply kick back, enjoy and relax this fried chicken recipe with homemade slaw', 21, 15, 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1273636_8.jpg?itok=VxE-1zWU', 13.99,'2019-05-21', 'Lunch',7),


('Oven Smoked BBQ Ribs', 'Fall off the bone tender ribs with a smoky-sweet crunchy crust! Served with cole slaw and cornbread', 21, 15, 'https://sweetcsdesigns.com/wp-content/uploads/2017/05/The-Best-Oven-Smoked-Ribs-Picture418-1024x683.jpg', 13.99,'2019-05-21', 'Dinner',7),

('Braised Beef Noodle', 'Delicious braised beef cooked with wheat noodles and Chinese cabbage in a beef broth.', 5, 1, 'https://www.chinesefoodrecipes.cc/wp-content/uploads/2017/07/Pasta-soup-with-red-braised-beef-11.jpg', 13.99,'2019-05-22', 'Dinner',5),

('Spring Rolls', 'Fried vegetarian spring rolls filled with carrots, onions, bamboo shoots, and cabbage. 6 pieces per order', 5, 1, 'https://dinnerthendessert.com/wp-content/uploads/2018/08/Spring-Rolls-688x459.jpg', 5.00,'2019-05-21', 'Lunch', 8);




INSERT INTO labels (label_name) VALUES ('Kosher'), ('Vegetarian'), ('Vegan'), ('Halal'), ('Gluten-Free'), ('Contains-dairy'),('Contains-Eggs'),('Contains-nuts'),('Contains-Shellfish'),('Spicy');


INSERT INTO label_dishes (dish_id, label_id) VALUES (1, 5),(1,4), (2, 2),(2, 10),(3, 4),(3, 5),(4,9),(4,7), (5, 9), (5,7), (6, 7);

INSERT INTO label_dishes (dish_id, label_id) VALUES (6,6), (7, 5),(8, 1),(9,2),(9,3),(10,1), (10,7), (11, 6), (11,7);

INSERT INTO label_dishes (dish_id, label_id) VALUES (12,6), (12, 7), (13, 1), (13,8), (14,4), (14,5), (15, 6), (15,9);

INSERT INTO label_dishes (dish_id, label_id) VALUES (16,4),(17,4),(17,5),(18,1),(19,2),(19,3),(20,4),(20,8),(21,2),(21,6),(22,6),(22,4);

INSERT INTO label_dishes (dish_id, label_id) VALUES (23,3),(23,2),(25,1),(25,7),(26,5),(27,1),(27,2),(28,1), (29,1), (29, 5),(30,1),(31,3),(33,5),(33,10);

INSERT INTO label_dishes (dish_id, label_id) VALUES
(34,2),(34,7),(36,5),(37,4),(38,5),(39,2),(39,6),(40,9),(40,6),(40,10),(41,7),(42,5),(43,10),(44,2);




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

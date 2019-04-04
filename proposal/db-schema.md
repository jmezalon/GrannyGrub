_BackEnd Tables with columns_

# users Table

| column name     | data type | details               |
| --------------- | --------- | --------------------- |
| id              | integer   | not null, primary key |
| first_name      | VARCHAR   |                       |
| last_name       | VARCHAR   |                       |
| email           | VARCHAR   | not null, unique      |
| password_digest | VARCHAR   | not null              |
| profile_pic     | VARCHAR   |                       |

# grandmas Table

| column name     | data type | details               |
| --------------- | --------- | --------------------- |
| id              | integer   | not null, primary key |
| first_name      | VARCHAR   | not null              |
| last_name       | VARCHAR   | not null              |
| house_num       | integer   | not null              |
| street_name     | VARCHAR   |                       |
| zip_code        | integer   | not null              |
| apt_num         | VARCHAR   |                       |
| email           | VARCHAR   | not null, unique      |
| password_digest | VARCHAR   | not null              |
| profile_pic     | VARCHAR   |                       |
| bio             | TEXT      | not null              |
| latitude        | float     | not null              |
| longitude       | float     | not null              |

# cuisine Table

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| type        | VARCHAR   | not null              |
| description | VARCHAR   | not null              |
| img_url     | VARCHAR   | not null              |

# dish Table

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| name        | VARCHAR   | not null              |
| description | VARCHAR   | not null              |
| grandma_id  | integer   | not null, foreign key |
| cuisine_id  | integer   | not null, foreign key |
| img_url     | VARCHAR   | not null              |
| price       | numeric   | not null              |

# ingredient Table

# reviews Table

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| type        | VARCHAR   | not null              |
| stars       | integer   | not null              |
| description | VARCHAR   |                       |
| user_id     | integer   | not null, foreign key |
| grandma_id  | integer   | not null, foreign key |

# favorites

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| dish_id     | integer   | not null, foreign key |
| user_id     | integer   | not null, foreign key |

# Orders Table

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| type        | VARCHAR   | not null, foreign key |
| user_id     | integer   | not null, foreign key |
| grandma_id  | integer   | not null, foreign key |
| grandma_id  | integer   | not null, foreign key |

# status

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| order_id    | integer   | not null              |
| completed   | boolean   |                       |

#seating

How do we organize the tables?
How to do the math for orders?

<!-- # feedback

| column name | data type | details               |
| ----------- | --------- | --------------------- |
| id          | integer   | not null, primary key |
| description | VARCHAR   |                       |
| granny_id   | integer   | not null, foreign key |
| user_id     | integer   | not null, foreign key | -->

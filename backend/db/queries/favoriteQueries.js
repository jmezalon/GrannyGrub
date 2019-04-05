const db = require("../connection");

const getAllFavorites = (req, res, next) => {
  db.any("SELECT * FROM favorites")
    .then(favorites => {
      res.status(200).json({
        status: "success",
        favorites,
        message: "all favorites"
      });
    })
    .catch(err => next(err));
};

const postFavorite = (req, res, next) => {
  let userId = parseInt(req.body.userId);
  let dishId = parseInt(req.body.dishId);
  db.none(
    "INSERT INTO favorites(user_id, dish_id) VALUES(${userId}, ${dishId})",
    {
      userId,
      dishId
    }
  )
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "added favorite"
      });
    })
    .catch(err => next(err));
};

const deleteFavorite = (req, res, next) => {
  let favId = parseInt(req.params.id);
  db.none("DELETE FROM favorites WHERE id = ${favId}", { favId })
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "deleted Fav"
      });
    })
    .catch(err => next(err));
};

module.exports = { getAllFavorites, postFavorite, deleteFavorite };

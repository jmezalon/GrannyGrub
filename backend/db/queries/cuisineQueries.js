const db = require("../connection");

const getAllCuisines = (req, res, next) => {
  db.any("SELECT * FROM cuisines")
    .then(cuisines => {
      res.status(200).json({
        status: "success",
        cuisines: cuisines,

        message: "Got All cuisine"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const getAllDishesByCuisine = (req, res, next) => {
  cuisineId = parseInt(req.params.id);

  db.any(
    "SELECT dishes.id AS dish_id, name, dishes.description AS description, dishes.img_url AS img_url, price, grandmas.id AS grandma_id, latitude, longitude, cuisines.id AS cuisine_Id, type FROM dishes JOIN grandmas on(grandmas.id = dishes.grandma_id) JOIN cuisines ON(cuisines.id = dishes.cuisine_id) WHERE dishes.cuisine_id = $1",
    [cuisineId]
  )
    .then(dishes => {
      res.status(200).json({
        status: "success",
        dishes: dishes,
        message: "Got All dishes by cuisine"
      });
    })
    .catch(err => {
      console.log("error", err);
      next(err);
    });
};

const addNewCuisine = (req, res, next) => {
  db.none(
    "INSERT INTO cuisines(type, description, img_url)VALUES (${type}, ${description}, ${img_url})",
    {
      type: req.body.type,
      description: req.body.description,
      img_url: req.body.img_url
    }
  )
    .then(() => {
      res.status(200).json({
        message: "success"
      });
    })
    .catch(err => {
      console.log("error", err);
      return next(err);
    });
};

const deleteCuisine = (req, res, next) => {
  const cuisine_id = parseInt(req.params.id);
  db.none("DELETE FROM cuisines WHERE id= $1", [cuisine_id])
    .then(() => {
      res.status(200).json({ message: "cuisine deleted" });
    })
    .catch(err => {
      console.log("error", err);
    });
};

module.exports = {
  getAllCuisines,
  getAllDishesByCuisine,
  addNewCuisine,
  deleteCuisine}
  
    

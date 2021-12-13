const express = require('express');
const router = express.Router();
const restaurantAPI = require("../controllers/restaurantApi");
const multer = require("multer");

//multer middleware

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.filename + "_" + Date.now() + "_"+ file.originalname);
    },
});

let upload = multer({
    storage: storage
}).single('image');

router.get("/", restaurantAPI.fetchAllRestaurants);
router.get("/:id", restaurantAPI.fetchRestaurantsById);
router.post("/", upload, restaurantAPI.createRestaurants);
router.patch("/:id", upload, restaurantAPI.updateRestaurants);
router.delete("/:id", restaurantAPI.deleteRestaurants);

module.exports = router;
const express = require('express');
const router = express.Router();
const cityAPI = require("../controllers/cityApi");
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

router.get("/", cityAPI.fetchAllCities);
router.get("/:id", cityAPI.fetchCitiesById);
router.post("/", upload, cityAPI.createCities);
router.patch("/:id", upload, cityAPI.updateCities);
router.delete("/:id", cityAPI.deleteCities);

module.exports = router;
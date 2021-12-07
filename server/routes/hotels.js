const express = require('express');
const router = express.Router();
const hotelAPI = require("../controllers/hotelApi");
const multer = require("multer");

//multer middleware

let storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.filename + "_" + Date.now() + "_"+file.originalname);
    },
});

let upload = multer({
    storage: storage
}).single('image');

router.get("/", hotelAPI.fetchAllHotels);
router.get("/:id", hotelAPI.fetchHotelsById);
router.post("/", upload, hotelAPI.createHotels);
router.patch("/:id", hotelAPI.updateHotels);
router.delete("/:id", hotelAPI.deleteHotels);

module.exports = router;
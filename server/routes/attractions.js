const express = require('express');
const router = express.Router();
const attractionAPI = require("../controllers/attractionApi");
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

router.get("/", attractionAPI.fetchAllAttractions);
router.get("/:id", attractionAPI.fetchAttractionsById);
router.post("/", upload, attractionAPI.createAttractions);
router.patch("/:id", upload, attractionAPI.updateAttraction);
router.delete("/:id", attractionAPI.deleteAttractions);

module.exports = router;
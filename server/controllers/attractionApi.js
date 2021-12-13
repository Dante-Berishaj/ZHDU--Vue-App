const Attraction = require("../models/Attaction")
const fs = require("fs");

module.exports = class attractionAPI {
    static async fetchAllAttractions(req, res) {
        try{
            const attractions = await Attraction.find();
            res.status(200).json(attractions);
        }catch (err){
            res.status(404).json({ message: err.message })
        }
    }

    static async fetchAttractionsById(req, res) {
        const id = req.params.id;
        try{
            const attraction = await Attraction.findById(id);
            res.status(200).json(attraction);
        }catch (err){
            res.status(404).json({ message: err.message });
        }
    }

    static async createAttractions(req, res) {
        const attraction = req.body;
        const imagename = req.file.filename;
        attraction.image = imagename;
        try{
            await Attraction.create(attraction);
            res.status(201).json({ message: 'Attraction added successfully' });
        }catch(err){
            res.status(400).json({ message: err.message });
        }
    }

    static async updateAttraction(req, res) {
        const id= req.params.id;
        let new_image = "";
        if(req.file){
            new_image = req.file.filename;
            try {
                fs.unlinkSync('./uploads/'+ req.body.old_image);
            } catch (err) {
                console.log(err);
            }
        }
        else{
            new_image = req.body.old_image;
        }

        const newAttraction = req.body;
        newAttraction.image = new_image;

        try {
            await Attraction.findByIdAndUpdate(id, newAttraction);
            res.status(200).json({ message: "Attraction updated" });
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    static async deleteAttractions(req, res) {
        const id = req.params.id;
        try {
            const result = await Attraction.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('./uploads/'+result.image)
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({ message: "Attraction deleted successfully" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}
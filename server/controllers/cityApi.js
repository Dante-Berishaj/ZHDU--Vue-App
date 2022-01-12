const City = require("../models/City")
const fs = require("fs");

module.exports = class cityAPI {
    static async fetchAllCities(req, res) {
        try{
            const cities = await City.find();
            res.status(200).json(cities);
        }catch (err){
            res.status(404).json({ message: err.message })
        }
    }

    static async fetchCitiesById(req, res) {
        const id = req.params.id;
        try{
            const city = await City.findById(id);
            res.status(200).json(city);
        }catch (err){
            res.status(404).json({ message: err.message });
        }
    }

    static async createCities(req, res) {
        const city = req.body;
        const imagename = req.file.filename;
        city.image = imagename;
        try{
            await City.create(city);
            res.status(201).json({ message: 'City added successfully' });
        }catch(err){
            res.status(400).json({ message: err.message });
        }
    }

    static async updateCities(req, res) {
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

        const newCity = req.body;
        newCity.image = new_image;

        try {
            await City.findByIdAndUpdate(id, newCity);
            res.status(200).json({ message: "City updated" });
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    static async deleteCities(req, res) {
        const id = req.params.id;
        try {
            const result = await City.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('./uploads/'+result.image)
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({ message: "City deleted successfully" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}
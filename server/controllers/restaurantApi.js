const Restaurant = require("../models/Restaurant")
const fs = require("fs");

module.exports = class restaurantAPI {
    static async fetchAllRestaurants(req, res) {
        try{
            const restaurants = await Restaurant.find();
            res.status(200).json(restaurants);
        }catch (err){
            res.status(404).json({ message: err.message })
        }
    }

    static async fetchRestaurantsById(req, res) {
        const id = req.params.id;
        try{
            const restaurant = await Restaurant.findById(id);
            res.status(200).json(restaurant);
        }catch (err){
            res.status(404).json({ message: err.message });
        }
    }

    static async createRestaurants(req, res) {
        const restaurant = req.body;
        const imagename = req.file.filename;
        restaurant.image = imagename;
        try{
            await Restaurant.create(restaurant);
            res.status(201).json({ message: 'Restaurant added successfully' });
        }catch(err){
            res.status(400).json({ message: err.message });
        }
    }

    static async updateRestaurants(req, res) {
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

        const newRestaurant = req.body;
        newRestaurant.image = new_image;

        try {
            await Restaurant.findByIdAndUpdate(id, newRestaurant);
            res.status(200).json({ message: "Restaurant updated" });
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    static async deleteRestaurants(req, res) {
        const id = req.params.id;
        try {
            const result = await Restaurant.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('./uploads/'+result.image)
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({ message: "Restaurant deleted successfully" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}
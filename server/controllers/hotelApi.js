const Hotel = require("../models/Hotel")
const fs = require("fs");

module.exports = class hotelAPI {
    static async fetchAllHotels(req, res) {
        try{
            const hotels = await Hotel.find();
            res.status(200).json(hotels);
        }catch (err){
            res.status(404).json({ message: err.message })
        }
    }

    static async fetchHotelsById(req, res) {
        const id = req.params.id;
        try{
            const hotel = await Hotel.findById(id);
            res.status(200).json(hotel);
        }catch (err){
            res.status(404).json({ message: err.message });
        }
    }

    static async createHotels(req, res) {
        const hotel = req.body;
        const imagename = req.file.filename;
        hotel.image = imagename;
        try{
            await Hotel.create(hotel);
            res.status(201).json({ message: 'Hotel added successfully' });
        }catch(err){
            res.status(400).json({ message: err.message });
        }
    }

    static async updateHotels(req, res) {
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

        const newHotel = req.body;
        newHotel.image = new_image;

        try {
            await Hotel.findByIdAndUpdate(id, newHotel);
            res.status(200).json({ message: "Post updated" });
        } catch (err) {
            res.status(404).json({ message: err.message })
        }
    }

    static async deleteHotels(req, res) {
        const id = req.params.id;
        try {
            const result = await Hotel.findByIdAndDelete(id);
            if(result.image != ''){
                try {
                    fs.unlinkSync('./uploads/'+result.image)
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({ message: "post deleted successfully" });
        } catch (err) {
            res.status(404).json({ message: err.message });
        }
    }
}
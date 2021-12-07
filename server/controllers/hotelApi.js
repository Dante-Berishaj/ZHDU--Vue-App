const Hotel = require("../models/Hotel")

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
        res.send('Fetch Post By ID');
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
        res.send('Update  post');
    }

    static async deleteHotels(req, res) {
        res.send('delete  post');
    }
}
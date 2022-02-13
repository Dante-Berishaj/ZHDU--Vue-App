import axios from "axios"
const baseURL  = "http://localhost:5001/api/hotel";

export default class API {

    static async getAllHotels(){
        const res = await axios.get(baseURL);
        return res.data; 
    }

    static async getHotelsByID(id){
        const res = await axios.get(`${baseURL}/${id}`);
        return res.data; 
    }

    static async addHotel(hotel){
        const res = await axios.post(baseURL, hotel);
        return res.data; 
    }

    static async updateHotel(id, hotel){
        const res = await axios.patch(`${baseURL}/${id}`, hotel);
        return res.data; 
    }

    static async deleteHotel(id){
        const res = await axios.delete(`${baseURL}/${id}`);
        return res.data; 
    }
}
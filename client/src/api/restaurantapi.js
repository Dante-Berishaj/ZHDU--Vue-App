import axios from "axios"
const baseURL  = "http://localhost:5001/api/restaurant";

export default class API {

    static async getAllRestaurants(){
        const res = await axios.get(baseURL);
        return res.data; 
    }

    static async getRestaurantsByID(id){
        const res = await axios.get(`${baseURL}/${id}`);
        return res.data; 
    }

    static async addRestaurant(restaurant){
        const res = await axios.post(baseURL, restaurant);
        return res.data; 
    }

    static async updateRestaurant(id, restaurant){
        const res = await axios.patch(`${baseURL}/${id}`, restaurant);
        return res.data; 
    }

    static async deleteRestaurant(id){
        const res = await axios.delete(`${baseURL}/${id}`);
        return res.data; 
    }
}
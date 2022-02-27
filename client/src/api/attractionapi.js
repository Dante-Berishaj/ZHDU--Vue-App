import axios from "axios"
const baseURL  = "http://localhost:5001/api/attraction";

export default class API {

    static async getAllAttractions(){
        const res = await axios.get(baseURL);
        return res.data; 
    }

    static async getAttractionsByID(id){
        const res = await axios.get(`${baseURL}/${id}`);
        return res.data; 
    }

    static async addAttraction(attraction){
        const res = await axios.post(baseURL, attraction);
        return res.data; 
    }

    static async updateAttraction(id, attraction){
        const res = await axios.patch(`${baseURL}/${id}`, attraction);
        return res.data; 
    }

    static async deleteAttraction(id){
        const res = await axios.delete(`${baseURL}/${id}`);
        return res.data; 
    }
}
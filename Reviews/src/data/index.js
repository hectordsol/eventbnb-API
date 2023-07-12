const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:5005/Review");
        return response.data;
    },
    create: async(review)=>{
        const response = await axios.post("http://database:5005/Review",review);
        return response.data;
    },
    get: async(id)=>{
        const response = await axios.get(`http://database:5005/Review/${id}`);
        return response.data;
    },
    change: async(id,review)=>{
        const response = await axios.put(`http://database:5005/Review/${id}`,review);
        return response.data;
    },
    remove: async(id)=>{
        const response = await axios.delete(`http://database:5005/Review/${id}`);
        return response.data;
    }
}
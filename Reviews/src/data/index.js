const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:5001/Review");
        return response.data;
    },
    create: async(review)=>{
        console.log(review);
        const response = await axios.post("http://database:5001/Review",review);
        return response.data;
    },
    get: async(id)=>{
        const response = await axios.get(`http://database:5001/Review/${id}`);
        return response.data;
    },
    change: async(id,review)=>{
        const response = await axios.put(`http://database:5001/Review/${id}`,review);
        return response.data;
    },
    remove: async(id)=>{
        const response = await axios.delete(`http://database:5001/Review/${id}`);
        return response.data;
    }
}
const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:5003/Salon");
        return response.data;
    },
    create: async(salon)=>{
        const response = await axios.post("http://database:5003/Salon",salon);
        return response.data;
    },
    get: async(id)=>{
        const response = await axios.get(`http://database:5003/Salon/${id}`);
        return response.data;
    },
    change: async(id,salon)=>{
        const response = await axios.put(`http://database:5003/Salon/${id}`,salon);
        return response.data;
    },
    remove: async(id)=>{
        const response = await axios.delete(`http://database:5003/Salon/${id}`);
        return response.data;
    }
}
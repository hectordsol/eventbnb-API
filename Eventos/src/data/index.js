const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:5001/Evento");
        return response.data;
    },
    create: async(evento)=>{
        const response = await axios.post("http://database:5001/Evento",evento);
        return response.data;
    },
    get: async(id)=>{
        const response = await axios.get(`http://database:5001/Evento/${id}`);
        return response.data;
    },
    change: async(id,evento)=>{
        const response = await axios.put(`http://database:5001/Evento/${id}`,evento);
        return response.data;
    },
    remove: async(id)=>{
        const response = await axios.delete(`http://database:5001/Evento/${id}`);
        return response.data;
    }
}
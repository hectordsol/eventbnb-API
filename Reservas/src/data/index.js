const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:5001/Reserva");
        return response.data;
    },
    create: async(reserva)=>{
        const response = await axios.post("http://database:5001/Reserva",reserva);
        return response.data;
    },
    get: async(id)=>{
        const response = await axios.get(`http://database:5001/Reserva/${id}`);
        return response.data;
    },
    change: async(id,reserva)=>{
        const response = await axios.put(`http://database:5001/Reserva/${id}`,reserva);
        return response.data;
    },
    remove: async(id)=>{
        const response = await axios.delete(`http://database:5001/Reserva/${id}`);
        return response.data;
    }
}
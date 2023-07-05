const axios = require("axios");

module.exports = {
    list: async () => {
        const response = await axios.get("http://database:5001/Usuario");
        return response.data;
    },
    create: async(usuario)=>{
        const response = await axios.post("http://database:5001/Usuario",usuario);
        return response.data;
    },
    get: async(id)=>{
        const response = await axios.get(`http://database:5001/Usuario/${id}`);
        return response.data;
    },
    getByEmail: async(email)=>{
        const response = await axios.get(`http://database:5001/Usuario/?email=${email}`);
        return response.data;
    },
    change: async(id,usuario)=>{
        const response = await axios.put(`http://database:5001/Usuario/${id}`,usuario);
        return response.data;
    },
    remove: async(id)=>{
        const response = await axios.delete(`http://database:5001/Usuario/${id}`);
        return response.data;
    }
}
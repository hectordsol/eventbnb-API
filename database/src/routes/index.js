const {Router}=require("express");
const database = require("../database");

const router = Router();
router.get("/:model", async (req,res) => {
    const {model} = req.params;
    const {email,salonId,fechainicio,fechafin} = req.query;
    let response = {};
    if(email) 
        response = await database[model].getByEmail(email)
    else if(salonId&&fechainicio&&fechafin)
        response = await database[model].verificarFecha(salonId,fechainicio,fechafin)
    else
        response = await database[model].list();
    res.status(200).json(response);
});
router.get("/:model/:id", async (req,res) => {
    const {model, id} = req.params;
    const response = await database[model].get(id);
    res.status(200).json(response);
});
router.put("/:model/:id", async (req,res) => {
    const {model, id} = req.params;
    const value = req.body;
    const response = await database[model].change(id,value);
    res.status(200).json(response);
});
router.post("/:model", async (req, res) =>{
    const {model} = req.params;
    const value = req.body;
    const response =await database[model].insert(value);
    res.status(200).json(response);
});
router.delete("/:model/:id", async (req,res) => {
    const {model, id} = req.params;
    console.log(model,id);
    const response = await database[model].remover(id);
    res.status(200).json(response);
});
module.exports = router;
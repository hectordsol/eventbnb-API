const {Router}=require("express");
const database = require("../database");

const router = Router();
router.get("/:model", async (req,res) => {
    const {model} = req.params;
    const {email} = req.query;
    let response = {};
    if(email) 
        response = await database[model].getByEmail(email)
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
    const response = await database[model].remove(id);
    res.status(200).json(response);
});
module.exports = router;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const model = require("./features/models/user-model")

const PORT = 6000;
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee");

app.post("/register", async (req, res) => {
    const {username,password} = req.body;
    try {
        const checked = await model.findOne({username: username})
        if(checked){
            res.json("exist")
        }else{
            res.json("notexist")
        }
    }catch (e){
        console.log(e);
    }
})

app.listen(PORT, () => {
    console.log(`Сервер запушен на порту ${PORT}`)
})
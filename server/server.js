const express = require("express");
const cors = require("cors");

const app = express();
const collection = require("./features/models/user-model")

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors());

app.get("/",cors(),(req,res)=>{

})

app.post("/register", async (req, res) => {
    const {username, password} = req.body
    const data = {
        username: username,
        password: password
    }
    try {
        const check = await collection.findOne({username: username})
        if (check) {
            res.json("exist")
        } else {
            res.json("notexist")
            await collection.insertMany([data])
        }
    } catch (e) {
        res.json("fail")
    }
});

app.listen(6000, () => {
    console.log(`Сервер запушен на порту ${6000}`)
});
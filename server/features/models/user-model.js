const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    balance: {type: Number, default: 0},
})
const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
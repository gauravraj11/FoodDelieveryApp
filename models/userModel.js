const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    username: { type: String, required: true },
    number: { type: Number, required: true, uniquie: true },
    email: { type: String, required: true, uniquie: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  })

const userModel = mongoose.model("user",userSchema);
 
module.exports = userModel;


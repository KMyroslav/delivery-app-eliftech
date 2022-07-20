const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  name: String,
  thumbIng: String,
  products:[{name: String, img: String}]
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
const mongoose = require('mongoose');

// var myId = mongoose.Types.ObjectId();

const Schema = mongoose.Schema;

var NewProductSchema = new Schema({
    productId:Number,
    productName:String,
    productCode:String,
    releaseDate:String,
    description:String,
    price:Number,
    starRating:Number,
    imageUrl:String
});

var Productdata = mongoose.model('product', NewProductSchema);

module.exports = Productdata;
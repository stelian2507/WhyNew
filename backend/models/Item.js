const { Schema, model } = require('mongoose')
const Item = model('Item', new Schema({
    item: String,
    price: Number,
    // image_url: String
    userId: { type: Schema.Types.ObjectId, ref: 'User' }

}))
module.exports = Item 
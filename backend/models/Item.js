const { Schema, model } = require('mongoose')
const Item = model('Item', new Schema({
    item: String,
    price: Number,
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    image_url: String

}))
module.exports = Item 
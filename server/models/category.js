const mongoose = require('mongoose')

const Category = mongoose.model(
  'Category',
  new mongoose.Schema(
    {
      name: {
        type: String,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 15,
        uppercase: true,
        required: true
      }
    },
    { toJSON: { versionKey: false } }
  )
)
module.exports = Category

const mongoose = require('mongoose')
const Joi = require('joi')

const Post = mongoose.model(
  'Post',
  new mongoose.Schema(
    {
      image: {
        type: String,
        get: (pathToImage) => `/images/${pathToImage.split('/').pop()}.jpg`,
        required: true
      },
      title: {
        type: String,
        minlength: 3,
        maxlength: 50,
        unique: true,
        trim: true,
        required: true
      },
      content: {
        type: String,
        minlength: 5,
        trim: true,
        required: true
      },
      category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
      },
      postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      isPrivate: { type: Boolean, default: false, required: true }
    },
    {
      timestamps: true,
      toJSON: { getters: true, versionKey: false },
      toObject: { getters: false, versionKey: false }
    }
  )
)

function validate(postBody) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
    content: Joi.string().min(5).required(),
    category: Joi.string().min(3).max(10).required(),
    isPrivate: Joi.boolean().required()
  })
  return schema.validate(postBody)
}

module.exports = { Post, validate }

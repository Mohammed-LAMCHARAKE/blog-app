const mongoose = require('mongoose')
const Joi = require('joi')
const config = require('config')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      minlength: 3,
      maxlength: 25,
      trim: true,
      required: true
    },
    lastName: {
      type: String,
      minlength: 3,
      maxlength: 25,
      trim: true,
      required: true
    },
    email: {
      type: String,
      email: true,
      minlength: 12,
      maxlength: 30,
      unique: true,
      trim: true,
      required: true
    },
    password: {
      type: String,
      minlength: 5,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  { toJSON: { versionKey: false } }
)

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      isAdmin: this.isAdmin
    },
    config.JWT_PRIVATE_KEY
  )
}

let User = mongoose.model('User', userSchema)

function validate(userBody) {
  return Joi.object({
    firstName: Joi.string().min(3).max(25).required(),
    lastName: Joi.string().min(3).max(25).required(),
    email: Joi.string().min(12).max(30).email().required().label('Mail'),
    password: Joi.string().min(5).required()
  }).validateAsync(userBody)
}

module.exports = { User, validate }

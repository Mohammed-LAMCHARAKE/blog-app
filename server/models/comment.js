const mongoose = require('mongoose')

const Comment = mongoose.model(
  'Comment',
  new mongoose.Schema(
    {
      text: {
        type: String,
        trim: true,
        maxlength: 255,
        required: true
      },
      commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      relatedPost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
        required: true
      }
    },
    {
      toJson: { versionKey: false }
    }
  )
)

module.exports = Comment

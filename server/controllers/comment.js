const { Post } = require('../models/post')
const Comment = require('../models/comment')

async function commentOnPost(req, res, next) {
  const post = await Post.findById(req.params.id)
  if (!post) return res.status(404).send('Post not found')
  if (req.body.comment == null || req.body.comment.length == 0)
    return res.status(400).send('Empty comment is not allowed !')
  if (req.body.comment.length > 500)
    return res.status(400).send('Comment is too long !')
  const comment = await Comment({
    text: req.body.comment,
    commentedBy: req.user._id,
    relatedPost: post.id
  })

  await comment.save()
  res.status(200).send('Comment has been sent successfully')
}

async function getPostComments(req, res, next) {
  const comments = await Comment.find({ relatedPost: req.params.id })
    .select('-relatedPost')
    .populate('commentedBy', 'firstName lastName')
    .sort({
      _id: 'desc'
    })

  res.send(comments)
}

module.exports = {
  commentOnPost,
  getPostComments
}

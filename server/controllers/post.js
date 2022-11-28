const fs = require('fs/promises')
const JSON5 = require('json5')
const { Post, validate } = require('../models/post')
const Category = require('../models/category')

async function addPost(req, res, next) {
  let { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)

  let result = require('mongoose').Types.ObjectId.isValid(req.body.category)
    ? req.body.category
    : await Category.findOneAndUpdate(
        { name: req.body.category },
        { $set: { name: req.body.category } },
        { upsert: true, new: true }
      )

  const post = new Post({
    ...req.body,
    image: req.file.path,
    postedBy: req.user._id,
    category: result._id?.toString() || req.body.category
  })
  await post.save()
  res.send('Post has been saved successfully.')
  // add the new post to redis cache
  reCachePosts()
}

async function editPost(req, res, next) {
  let post = await Post.findById(req.params.id)
  if (!post) return res.status(404).send('Post not found.')
  let { error } = validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  if (post.postedBy.toString() !== req.user._id && !req.user.isAdmin)
    return res
      .status(403)
      .send('Only owner of the post or Admin is allowed to edit !')
  post.title = req.body.title
  post.content = req.body.content
  post.category = req.body.category
  post.isPrivate = req.body.isPrivate
  if (req.file) {
    await fs.rm(post.toObject().image)
    post.image = req.file.path
  }
  await post.save()
  res.send('Post has been edited successfully.')
  reCachePosts()
}

async function deletePost(req, res, next) {
  const post = await Post.findById(req.params.id)
  if (!post) return res.status(404).send('Post not found.')
  if (post.postedBy.toString() === req.user._id || req.user.isAdmin) {
    await Post.deleteOne({ _id: req.params.id })
    post.image && (await fs.rm(post.toObject().image))
  } else
    return res
      .status(403)
      .send('Only owner of this post or admin can delete it!')
  res.send('Post has been deleted successfully.')
  // Re-Caching the posts
  reCachePosts()
}

async function getPost(req, res, next) {
  const post = await Post.findById(req.params.id)
    .populate('postedBy', 'firstName lastName')
    .populate('category')
  if (!post) return res.status(404).send('Post not found.')
  res.send(post)
}

async function getPosts(req, res, next) {
  let posts = await Redis.LRANGE('posts', 0, -1)

  if (posts.length == 0) {
    posts = await Post.find({ isPrivate: false })
      .populate('postedBy', 'firstName lastName')
      .populate('category')
      .sort({ _id: 'desc' })

    res.send(posts)
    await Redis.LPUSH('posts', JSON.stringify(posts))
    return
  }
  res.send(JSON5.parse(posts))
}

async function getUserOwnPosts(req, res, next) {
  const posts = await Post.find({ postedBy: req.user._id })
    .populate('category')
    .sort({ _id: 'desc' })
  res.send(posts)
}

async function reCachePosts(req, res, next) {
  const posts = await Post.find({ isPrivate: false })
    .populate('postedBy', 'firstName lastName')
    .populate('category')
    .sort({ _id: 'desc' })
  await Redis.DEL('posts')
  await Redis.LPUSH('posts', JSON.stringify(posts))
}

module.exports = {
  addPost,
  editPost,
  deletePost,
  getPost,
  getPosts,
  getUserOwnPosts
}

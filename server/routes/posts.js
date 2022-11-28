const router = require('express').Router()
const auth = require('../middlewares/auth')
const objectId = require('../middlewares/objectId')
const multer = require('multer')

const {
  addPost,
  getPost,
  deletePost,
  editPost,
  getPosts,
  getUserOwnPosts
} = require('../controllers/post')
const { getPostComments, commentOnPost } = require('../controllers/comment')

const upload = multer({
  dest: require('path').join(__dirname, '../public/images'),
  limits: { fileSize: 2000000 } // 2MB
})

router.get('/', getPosts)
router.get('/me', auth, getUserOwnPosts)
router.get('/:id', objectId, getPost)
router.post('/', auth, upload.single('image'), addPost)
router.put('/:id', auth, objectId, upload.single('image'), editPost)
router.delete('/:id', auth, objectId, deletePost)
router.get('/:id/comments', objectId, getPostComments)
router.post('/:id/comment', objectId, auth, commentOnPost)

module.exports = router

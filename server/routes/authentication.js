const router = require('express').Router()
const {
  signup,
  login,
  resetPassword,
  changePassword
} = require('../controllers/authentication')

router.post('/signup', signup)
router.post('/login', login)
router.post('/reset-password', resetPassword)
router.patch('/reset-password/:id', changePassword)

module.exports = router

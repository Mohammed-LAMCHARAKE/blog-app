const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')
const { User, validate } = require('../models/user')
const sendEmailTo = require('../utils/mailer')

async function signup(req, res, next) {
  let { error } = await validate(req.body)
  if (error) return res.status(400).send(error.details[0].message)
  let user = await User.findOne({ email: req.body.email })
  if (user) return res.status(400).send('User is already registred')

  user = new User(req.body)
  user.password = await bcrypt.hash(user.password, await bcrypt.genSalt(8))
  await user.save()
  return res
    .header('access-control-expose-headers', 'x-auth-token')
    .header('x-auth-token', user.generateAuthToken())
    .send('User has been registred successfully')
}

async function login(req, res, next) {
  if (!req.body.email && !req.body.password)
    return res.status(400).send('Invalid email or password ')
  let user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(400).send('Invalid email or password ')
  let isValid = await bcrypt.compare(req.body.password, user.password)
  if (!isValid) return res.status(400).send('Invalid email or password ')
  return res.send(user.generateAuthToken())
}

async function resetPassword(req, res, next) {
  if (!req.body.email) return res.status(400).send('Email is required')
  let user = await User.findOne({ email: req.body.email })
  if (!user) return res.status(404).send('Email either invalid or not found')
  let token = jwt.sign(
    { _id: user._id, email: user.email },
    config.JWT_PRIVATE_KEY,
    { expiresIn: '15m' }
  )
  let info = await sendEmailTo(
    req.body.email,
    'PASSWORD RESET',
    'Click here to reset your password .',
    `<a href=${req.protocol}://${req.get('host')}${req.originalUrl}/
    ${token}>Reset Password Now</a>`
  )

  return info.accepted
    ? res.send('Email has been sent , verify your email')
    : res.status(500).send('Unexpected Error occured , try again later')
}

async function changePassword(req, res, next) {
  if (!req.params.id) return res.status(400).send('Invalid id')
  let payload = jwt.verify(req.params.id, config.JWT_PRIVATE_KEY)
  if (!(await User.findById(payload._id)))
    return res.status(404).send('User not found')
  if (!req.body.password || req.body.password < 5)
    return res.status(400).send('Invalid Password')
  let newPassword = await bcrypt.hash(
    req.body.password,
    await bcrypt.genSalt(8)
  )
  let user = await User.updateOne(
    { _id: payload._id },
    { password: newPassword }
  )
  if (user.modifiedCount == 1)
    return res.send('Password has been changed successfully.')
}

module.exports = {
  signup,
  login,
  resetPassword,
  changePassword
}

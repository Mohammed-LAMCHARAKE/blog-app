const router = require('express').Router()
const { getCategories, getCategory } = require('../controllers/category')
const objectId = require('../middlewares/objectId')

router.get('/', getCategories)
router.get('/:id', objectId, getCategory)

module.exports = router

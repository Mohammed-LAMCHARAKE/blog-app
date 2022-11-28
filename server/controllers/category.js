const Category = require('../models/category')

async function getCategories(req, res, next) {
  // let categories = await client.get('categories')
  // if (categories == null) {
  let categories = await Category.find().sort({ name: 'asc' })
  // await client.set('categories', categories)
  // }

  res.send(categories)
}

async function getCategory(req, res, next) {
  const category = await Category.findById(req.params.id)
  if (!category) return res.status(404).send('Category not found')
  res.send(category)
}

module.exports = { getCategories, getCategory }

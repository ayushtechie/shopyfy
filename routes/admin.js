const express = require('express')

const adminControllers = require('../controllers/admin')
const isAuth = require('../middleware/is-auth')

const router = express.Router()

router.get('/add-product', adminControllers.getAddProduct)

module.exports = router
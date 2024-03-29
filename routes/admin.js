const express = require('express')

const adminControllers = require('../controllers/admin')

const router = express.Router()

router.get('/add-product', adminControllers.getAddProduct)

module.exports = router
const express = require('express')

const adminControllers = require('../controllers/admin')
const isAuth = require('../middleware/is-auth')

const router = express.Router()

router.get('/add-product', isAuth, adminControllers.getAddProduct)
router.post('/add-product', isAuth, adminControllers.postAddProduct)

module.exports = router
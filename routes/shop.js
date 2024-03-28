const express = require('express')
const shopControllers = require('../controllers/shop')

const router = express.Router()


router.get('/', shopControllers.getIndex)

module.exports = router
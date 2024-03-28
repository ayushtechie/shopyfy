const express = require('express')

const shopRoutes = require('./routes/shop')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(shopRoutes)

app.listen(3000)
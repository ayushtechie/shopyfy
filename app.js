const express = require('express')

const adminRoutes = require('./routes/admin')

const shopRoutes = require('./routes/shop')
const authRoutes = require('./routes/auth')

const app = express()

const MONGO_URI = "mongodb+srv://ayush:v5M8iknYBVHuYNyP@cluster0.onu2gsh.mongodb.net/shop?retryWrites=true&w=majority"

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(authRoutes)

app.listen(3000)
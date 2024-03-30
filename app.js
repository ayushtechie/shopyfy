const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDbStore = require('connect-mongodb-session')(session)

const adminRoutes = require('./routes/admin')

const shopRoutes = require('./routes/shop')
const authRoutes = require('./routes/auth')
const MONGO_URI = "mongodb+srv://ayush:v5M8iknYBVHuYNyP@cluster0.dewqifr.mongodb.net/shop?retryWrites=true&w=majority"

const User = require('./models/user')

const app = express()
const store = new MongoDbStore({
    uri: MONGO_URI,
    collection: "sessions"
})




app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({extended: false}))

app.use(session({secret: 'my-secret', resave: false, saveUninitialized: false, store: store}))

app.use((req, res, next) => {
    User.findById(req.session.user_id)
    .then(user => {
        req.user = user
        next()
    })
    .catch(err => console.log(err))
})

app.use((req, res, next) => {
    if(!req.session.user){
        return next()
    }
    User.findById(req.session.user_id)
    .then(user =>{
        req.user = user
        next()
    })
    .catch(err => console.log(err))
})

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(authRoutes)

mongoose.connect(MONGO_URI)
.then(result => {
    app.listen(3000)
})
.catch(err => {
    console.log(err);
})
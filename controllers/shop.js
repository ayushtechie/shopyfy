const Products = require("../models/product")

exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'HomePage',
        path: '/',
        isAuthenticated: req.session.isLoggedIn
    })
}

exports.getProducts = (req, res, next) => {
    Products.find().then(prod => {
        console.log(prod);
        res.render('shop/products', {
            pageTitle: 'Products',
            path: '/products',
            isAuthenticated: req.session.isLoggedIn,
            products: prod
        })
    }).catch(err => console.log(err))

}
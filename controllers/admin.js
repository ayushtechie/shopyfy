const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: 'admin/add-product',
        isAuthenticated: req.session.isLoggedIn
    })
}

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const dailyIncome = req.body.dailyIncome;
    const validityPeriod = req.body.validityPeriod;
    const totalIncome = req.body.totalIncome;

    const product = new Product({
        title: title,
        imageUrl: imageUrl,
        price: price,
        dailyIncome: dailyIncome,
        validityPeriod: validityPeriod,
        totalIncome: totalIncome
    })

    product.save().then((result) => {
        console.log(product);
        res.redirect('/')
    }).catch(err => console.log(err))



    res.redirect("/")
}
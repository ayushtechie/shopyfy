exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'HomePage',
        path: '/'
    })
}

exports.getProducts = (req, res, next) => {
    res.render('shop/products', {
        pageTitle: 'Products',
        path: '/products'
    })
}
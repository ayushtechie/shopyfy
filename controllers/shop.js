exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'HomePage',
        path: '/',
        isAuthenticated: req.session.isLoggedIn
    })
}

exports.getProducts = (req, res, next) => {
    res.render('shop/products', {
        pageTitle: 'Products',
        path: '/products',
        isAuthenticated: req.session.isLoggedIn
    })
}
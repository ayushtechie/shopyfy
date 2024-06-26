const bcrypt = require('bcryptjs')

const User = require('../models/user')

exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isAuthenticated: false,
        errorMessage: req.flash('error')
    })
}
exports.getSignUp = (req, res, next) => {
    res.render("auth/signup", {
        path: "/signup",
        pageTitle: "Signup",
        isAuthenticated: false,
        errorMessage: req.flash('error')
    });
}

exports.postLogin = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({ email: email })
    .then(user => {
        if (!user) {
            req.flash('error', 'invalid email or password')
            return res.redirect('/login')
        }
        bcrypt
            .compare(password, user.password)
            .then(doMatch => {
                if (doMatch) {
                    req.session.isLoggedIn = true
                    req.session.user = user
                    return res.redirect('/')
                    
                }
                res.redirect('/login')
            })
    }).catch(err => {
        res.redirect('/login')
        console.log(err)
    })

}

exports.postSignup = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                req.flash('error', 'E-mail allready exists, please use another')
                return res.redirect('/signup')
            }
            return bcrypt
                .hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        email: email,
                        password: hashedPassword
                    })
                    return user.save()
                }).then(result => res.redirect('/login'))
        })
        .catch(err => console.log(err))
}


exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
      console.log(err);
      res.redirect("/");
    });
  };
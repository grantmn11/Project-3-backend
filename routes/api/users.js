const router = require('express').Router();

const usersCtrl = require('../../controllers/users')
router.use(require('../../config/auth'))
router.post('/signup', usersCtrl.signup)
router.post('/login',  usersCtrl.login)

function checkAuth(req, res, next){
    if(req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'})
}

module.exports = router;
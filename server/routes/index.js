const Rout = require('express')
const router = new Rout()
const UserRout = require('./UserR')
const AppsRout = require('./AppsR')
const AppsInfosRout = require('./AppsInfosR')

router.use('/user', UserRout)
router.use('/apps', AppsRout)

module.exports = router
const Rout = require('express')
const router = new Rout()
const UserContr = require('../contr/UserContr')
const authMiddleware = require('../middleware/authMdlw')

router.post('/reg', UserContr.reg)
router.post('/log', UserContr.log)
router.post('/passerror', UserContr.passError)
router.get('/auth', authMiddleware, UserContr.check)

module.exports = router
const Rout = require('express')
const router = new Rout()
const AppsContr = require('../contr/AppsContr')
const { AppsInfo } = require('../DBmodels/DBmodels')

router.post('/', AppsContr.create)
router.get('/', AppsContr.get_all)
router.get('/:id', AppsContr.get_table)

module.exports = router
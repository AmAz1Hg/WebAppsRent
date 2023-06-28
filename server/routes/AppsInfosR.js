const Rout = require('express')
const router = new Rout()
const AppsInfosContr = require('../contr/AppsInfosContr')
const { AppsInfo } = require('../DBmodels/DBmodels')
const AdminRole = require('../middleware/adminCheck')

router.post('/', AdminRole('Admin'), AppsInfosContr.create_table)
router.get('/:id', AppsInfosContr.get_table)

module.exports = router  


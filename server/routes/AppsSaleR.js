const Rout = require('express')
const router = new Rout()
const AppsContrSale = require('../contr/AppsContrSale')
const { AppsInfo } = require('../DBmodels/DBmodels')

router.post('/', AppsContrSale.createForSale)
router.get('/', AppsContrSale.get_allSale)
router.get('/:id', AppsContrSale.get_tableSale)

module.exports = router

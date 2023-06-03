const { Router } = require('express');
const router = Router();
const videoRouters = require('./videoRouters')
const genresRouters = require('./genresRouters')
const platformsRouters = require('./platformsRouters')
const pagoPaypal = require('./pagoPaypal')

router.use('/videogames', videoRouters);
router.use('/genres',genresRouters);
router.use('/platforms',platformsRouters)
router.use('/pago',pagoPaypal)

module.exports = router;

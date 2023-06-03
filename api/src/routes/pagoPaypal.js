const {Router} = require('express');
const pagoPaypal = Router();
const paypalpago = require('../handlers/paypalpago')

pagoPaypal.post('/',paypalpago);

module.exports = pagoPaypal;
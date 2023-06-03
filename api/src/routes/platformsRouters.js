const {Router} = require('express');
const platformsRouters = Router();

const {platformsHandlers} = require('../handlers/platformsHandlers')

platformsRouters.get('/',platformsHandlers);

module.exports = platformsRouters;

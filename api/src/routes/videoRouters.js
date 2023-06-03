const {Router} = require('express');
const videoRouters = Router();
const {
    getNameVideog,
    getVideog,
    getIdVideog,
    createVideog
} = require('../handlers/videoHandlers')

videoRouters.get('/name', getNameVideog)
videoRouters.get('/',getVideog)
videoRouters.get('/:idVideogame',getIdVideog)
videoRouters.post('/',createVideog)

module.exports = videoRouters;
const {Router} = require('express');
const genresRouters = Router();

const {genresHandlers} = require('../handlers/genresHandlers')

genresRouters.get('/',genresHandlers);

module.exports = genresRouters;
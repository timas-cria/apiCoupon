const express = require('express');
const router = express.Router();

// requisição para o arquivo de rotas utilizar codigos do controlador de cupom (CouponController.js)
const CouponController = require('./controlers/CouponController');

module.exports = router;
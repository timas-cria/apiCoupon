const express = require('express');
const router = express.Router();

// requisição para o arquivo de rotas utilizar codigos do controlador de cupom (CouponController.js)
const CouponController = require('./controlers/CouponController');

// rota para devolver todos os cupons do banco de dados (rota: localhos:{porta}/api(como definido no arquivo server)/coupons)
router.get('/coupons', CouponController.selectAll);

// rota para selectionar apenas um cupom do banco de dados
router.get('/coupon/:code', CouponController.selectCoupon);


module.exports = router;
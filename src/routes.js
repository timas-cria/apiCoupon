const express = require('express');
const router = express.Router();

// requisição para o arquivo de rotas utilizar codigos do controlador de cupom (CouponController.js)
const CouponController = require('./controlers/CouponController');

// rota para devolver todos os cupons do banco de dados (rota: localhos:{porta}/api(como definido no arquivo server)/coupons)
router.get('/coupons', CouponController.selectAll);

// rota para selectionar apenas um cupom do banco de dados
router.get('/coupon/:code', CouponController.selectCoupon);

// rota para adicionar cupons no banco de dados
router.post('/coupon', CouponController.createCoupon);
// rota funcionando apenas no rest test test, no postman nao funciona (no postman req.body é vazia)
// TODO: investigar porque a rota nao funciona no postman e "arrumar" isso, se possível

module.exports = router;
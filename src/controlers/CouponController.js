const CouponService = require('../services/CouponService');

module.exports = {
    selectAll: async (req, res) => {// req = request, res = response 
        let json = {error:'', result:[]};

        let coupons = await CouponService.selectAll();

        // listando todos os cupons resultants da função selectAll dentro da let json
        for(let coupon in coupons){
            // .push em json.result (resultado da query) com objetos que equivalem aos cupons do banco de dados
            json.result.push({
                id: coupons[coupon].id,
                value: coupons[coupon].value,
                code: coupons[coupon].code
            });
        }
        res.json(json);
    },
    
    selectCoupon: async (req, res) => {// req = request, res = response 
        let json = {error:'', result:{}};

        // criando um parâmetro baseado no código de um cupom
        let code = req.params.code;

        // solicitando a query vinda do arquivo CouponService.js
        let coupon = await CouponService.selectCoupon(code);

        if(coupon){
            json.result = coupon;
        }
        res.json(json);
    },

    createCoupon: async (req, res) => {// req = request, res = response 
        let json = {error:'', result:{}};

        let code = req.body.code;
        let value = req.body.value;
        console.log(req.body)

        if(code && value){
            let CouponId = await CouponService.createCoupon(code, value);
            json.result = {
                id: CouponId,
                code,
                value
            };
        }else {
            json.error = "Invalid sended params"
        }
        res.json(json);
    }
}
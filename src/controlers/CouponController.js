const CouponService = require('../services/CouponService');

module.exports = {
    selectAll: async (req, res) => {// req = request, res = response 
        let json = {erro:'', result:[]};

        let coupons = await CouponService.selectAll();

        // listando todos os cupons resultants da função selectAll dentro da let json
        for(let coupon in coupons){
            // .push em json.result (resultado da query) com objetos que equivalem aos cupons do banco de dados
            json.result.push({
                id: coupons[coupon].id,
                value: coupons[coupon].value,
                name: coupons[coupon].name
            });
        }
        res.json(json);
    }
}
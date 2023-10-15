const db = require('../db');

module.exports = {
    // criando a função com query (de selecionar todos os cupons) no banco de dados que será usada no CouponController.js 
    selectAll: () => {
        // O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante
        return new Promise((accepted, rejected) => {
            // faz a query no banco e "prepara" para retornar erros ou resultados
            db.query('select * from coupons', (error, results) => {
                // se houver erros retorna-os, se não, retorna os resultados 
                if(error) {
                    rejected(error);
                    return
                }
                accepted(results);
            });
        });
    },

    // criando a função com query (de selecionar um cupom) no banco de dados que será usada no CouponController.js 
    selectCoupon: (code) => {
        // O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante
        return new Promise((accepted, rejected) => {
            // ? é substituido por [code]
            db.query('select * from coupons where code = ?', [code] ,(error, results) => {
                // se houver erros retorna-os, se não, retorna os resultados 
                if(error) {
                    rejected(error);
                    return
                }
                if(results.length > 0) {
                    accepted(results[0]);
                }else {
                    accepted(false);
                }
            });
        });
    }
};
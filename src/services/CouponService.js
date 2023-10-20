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
    // recebe como parâmetro o valor code, que, representa o código de um cupon no banco de dados
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
    },

    // criando a função com criação de cupom (insert into coupons) que será usada na CouponController.js
    // recebe como parâmetro os valores code e value que correspondem ao código e valor dos cupons do banco de dados
    // nao recebe id, pois, este tem a propriedade auto_increment no banco 
    createCoupon: (code, value) => {
        // O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante
        return new Promise((accepted, rejected) => {
            // ? é substituido pelos valores dentro dos conchetes "[]"
            db.query('insert into coupons (value, code) values (?, ?);', [value, code] ,(error, results) => {
                // se houver erros retorna-os, se não, retorna os resultados 
                if(error) {
                    rejected(error);
                    return
                }
                accepted(results.createCoupon)
            });
        });
    },

    // criando uma função, que será usada no CouponController.js que altera um cupom no banco de dados
    // primeiro será selecionado um cupon pelo código do cupom (perceba que o código é diferente do id) depois este terá suas informações alteradas
    alterCoupon: (value, newCode, oldCode) => {
        // O objeto Promise representa a eventual conclusão (ou falha) de uma operação assíncrona e seu valor resultante
        return new Promise((accepted, rejected) => {
            // ? é substituido pelos valores dentro dos conchetes "[]"
            db.query('update coupons set value = ?, code = ? where code = ?;', [value, newCode, oldCode] ,(error, results) => {
                // se houver erros retorna-os, se não, retorna os resultados 
                if(error) {
                    rejected(error);
                    return
                }
                accepted(results.createCoupon)
            });
        });
    }
};
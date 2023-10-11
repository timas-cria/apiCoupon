const db = require('../db');

module.exports = {
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
    }
};
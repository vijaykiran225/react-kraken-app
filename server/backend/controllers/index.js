'use strict';


module.exports = function (router) {

    router.get('/api/transactions/:txnId', function (req, res) {

        res.json({
            id: req.params.txnId,
            from: "vijay",
            to: "Ezio"
        });
    });

};

let router = require('express').Router();
let SomethingController  = require('../controllers/something.controller.js');

router.route('/something')
    .get(SomethingController.getSomething);

module.exports = router;

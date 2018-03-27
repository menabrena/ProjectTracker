let router = require('express').Router();
let HubstaffController  = require('../controllers/hubstaff.controller');

router.route('/projects')
    .get(HubstaffController.getProjects);

module.exports = router;

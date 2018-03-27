const router                    = require('express').Router();
const NotificationController    = require('../controllers/notification.controller');

router.route('/notification')
    .get(NotificationController.getNotifications)
    .post(NotificationController.createNotification);

module.exports = router;

require('dotenv').load()
const Notification = require('../models/Notification')

exports.createNotification = function(req, res){
    if(!req.body.projectID) return res.status(400).send({err: "No projectID specified"});
    if(!req.body.projectName) return res.status(400).send({err: "No projectName specified"});
    if(!req.body.emails) return res.status(400).send({err: "No emails specified"});
    if(!req.body.budget) return res.status(400).send({err: "No budget specified"});
    if(!req.body.percentage) return res.status(400).send({err: "No percentage specified"});

    const notification          = new Notification();
    notification.projectID      = req.body.projectID;
    notification.projectName    = req.body.projectName;
    notification.emails         = req.body.emails;
    notification.budget         = req.body.budget;
    notification.percentage     = req.body.percentage;

    notification.save(function(err, notification) {
        if(err) return res.status(500).send({err: err})
        return res.status(200).send({msg: "Notification created"})
    })

};

exports.getNotifications = function(req, res) {
    Notification.find({}, function(err, notifications) {
        if(err) return res.status(500).send({err: err})
        return res.status(200).send(notifications)
    })
}
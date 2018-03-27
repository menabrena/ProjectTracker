let Something = require('../models/Something');

exports.getSomething = function(req,res){
    // Send something
    Something.find({}, function(err,somethings){
       if(err) return res.status(500).send({err: 'could not query database'});
       res.send(somethings);
    });
};
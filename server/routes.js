let something       = require('./routes/something.routes.js');
let hubstaff        = require('./routes/hubstaff.routes')
const notification  = require('./routes/notification.routes')

let api_routes = function(app){
    app.use('/api',something);
    app.use('/api', hubstaff);
    app.use('/api', notification)
};

module.exports = api_routes;
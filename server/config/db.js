const mongoose  = require('mongoose');
const dotenv    = require('dotenv').config();
const colors    = require('colors');

if(process.env.APP_ENVIRONMENT === 'live') {
    console.log('Connecting to live database'.yellow);
    var db_url = `mongodb://${process.env.DEV_DB_USER}:${process.env.DEV_DB_PASS}@${process.env.DEV_DB_HOST}:${process.env.DEV_DB_PORT}/${process.env.DEV_DB_NAME}`;
} else if(process.env.APP_ENVIRONMENT === 'development') {
    console.log('Connecting to dev database...'.yellow);
    var db_url = `mongodb://${process.env.LIVE_DB_USER}:${process.env.LIVE_DB_PASS}@${process.env.LIVE_DB_HOST}:${process.env.LIVE_DB_PORT}/${process.env.LIVE_DB_NAME}`;
}

mongoose.connect(db_url,(err) => {
    if(err) {
        console.log(`Error: ${err}`.red);
    } else {
        console.log('Database connection established'.green)
    }
});


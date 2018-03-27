/** Load libraries **/
require('dotenv').config();
require('./server/config/db');

const express           = require('express');
const app               = express();
const helmet            = require('./server/config/helmet');
const path              = require('path');
const bodyParser        = require('body-parser');
const routes            = require('./server/routes');
const methodOverride    = require('method-override');
const PORT              = process.env.PORT || 3000;
const colors            = require('colors');

/** Protect app **/
helmet(app);

/** Parse requests **/
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));

/** Set up routes and frontend **/
app.use(express.static(path.join(__dirname, 'public')));
routes(app);
app.all('/*', (req, res) => { res.sendFile(path.join(__dirname, 'public/index.html')); });

/** Start server **/
app.listen(process.env.PORT || PORT, () => { console.log(`Server running on: ${PORT}`.green); });

/*

require('dotenv').load()
const express   = require('express')
const axios     = require('axios')

const appToken  = process.env.appToken;
const authToken = process.env.authToken;

let obtainAuthToken = function() {

    const options = {
        url: "https://api.hubstaff.com/v1/auth",
        headers: {'App-Token' : appToken},
        data: {
            email: 'ernestopm20@gmail.com',
            password: '7hermanos'
        },
        method: 'post'
    }

    axios(options).then(
        function success(res) {
            console.log(res.data)
        },
        function error(res) {
            console.log(res)
        })
    ;

}
//obtainAuthToken()

let getProjects = function() {
    const options = {
        url: 'https://api.hubstaff.com/v1/projects',
        headers: {
            'App-Token'  : appToken,
            'Auth-Token' : authToken
        },
        method: 'get'
    }

    axios(options).then(
        function success(res) {
            console.log(res.data)
        },
        function error(res) {

        }
    )
}

// By week
let getInfoPerProjectByWeek = function() {
    let today = new Date();
    let oneWeekAgo = new Date();
    let oneDayAgo = new Date();

    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    oneWeekAgo.setDate(oneWeekAgo.getDate() -7);

    const options = {
        url: 'https://api.hubstaff.com/v1/custom/by_project/team',
        headers: {
            'App-Token'     : appToken,
            'Auth-Token'    : authToken
        },
        params: {
            'start_date'    : oneDayAgo,
            'end_date'      : today
        },
        method: 'get'
    }

    axios(options).then(
        function success(res) {
            let root = res.data.organizations[0]
            console.log(JSON.stringify(root))
        },
        function error(res) {
            console.log(res)
        }
    )
}

//getProjects()

getInfoPerProjectByWeek()


    Todo: Set up subdomain, make view with dropdown


    Questions:
    How do you want to setup this? you want a frontend solution? Which fields do you want to include?
    How much do you want to separate each data? just notify when reaching a certain threshold?
    How often should we check for the time tracked? Limit is 1000 requests per hour (I suggest 1 time every half an hour)

 */


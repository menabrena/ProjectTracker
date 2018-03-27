require('dotenv').load()
let axios = require('axios')

exports.getProjects = function(req, res){

    const appToken  = process.env.appToken;
    const authToken = process.env.authToken;

    const options = {
        url: 'https://api.hubstaff.com/v1/projects',
        headers: {
            'App-Token'  : appToken,
            'Auth-Token' : authToken
        },
        method: 'get'
    }

    axios(options).then(
        function success(response) {
            return res.status(200).send(response.data);
        },
        function error(err) {
            return res.status(500).send({data: err});
        }
    )

};
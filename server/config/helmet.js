let helmet = require('helmet');

/*Helmet config function*/
let helmetConfig = function(app) {
    // Sets "X-DNS-Prefetch-Control: off".
    app.use(helmet.dnsPrefetchControl());

    // Sets "Frameguard Same origin"
    app.use(helmet.frameguard({
        action: 'sameorigin'
    }));

    // Disable X-Powered-By
    app.use(helmet.hidePoweredBy());

    // Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains". Only HTTPS
    //let sixtyDaysInSeconds = 5184000
    // app.use(helmet.hsts({
    //   maxAge: sixtyDaysInSeconds
    // }));

    // Sets "X-Download-Options: noopen".
    app.use(helmet.ieNoOpen());

    // Sets "X-Content-Type-Options: nosniff".
    app.use(helmet.noSniff());

    // Sets "X-XSS-Protection: 1; mode=block".
    app.use(helmet.xssFilter())

    //Sets "CSP configuration"
    // app.use(helmet.contentSecurityPolicy({
    //     directives: {
    //         defaultSrc: ["'self'"],
    //         scriptSrc: [
    //             "'self'",
    //             //'https://code.jquery.com'
    //         ],
    //         styleSrc: [
    //             "'self'",
    //             // 'fonts.googleapis.com',
    //             // 'fonts.gstatic.com'
    //         ],
    //     }
    // }));

    // Sets "Public-Key-Pins: ...; includeSubDomains"
    // app.use(helmet.hpkp({
    //   maxAge: ninetyDaysInSeconds,
    //   sha256s: [/* ... */],
    //   includeSubdomains: true
    // }))
}
/*End helmet config function*/

module.exports = helmetConfig;

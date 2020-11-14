const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = require('./config').secret;
const authCookieName = require('./config').authCookieName;


module.exports = (app) => {
    
    app.use(cors());
    app.disable('x-powered-by');

    app.use(function(req, res, next) {
        // Website to allow to connect
        // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        // Request methods to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        // True if the website needs to include cookies in the requests sent
        // to the API (e.g. in case of sessions use)
        res.setHeader('Access-Control-Allow-Credentials', true);
        // Pass to next layer of middleware
        next();
    });
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    
    app.use(cookieParser(secret));
};

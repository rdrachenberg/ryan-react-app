const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const secret = require('./config').secret;
const authCookieName = require('./config').authCookieName;


module.exports = (app) => {
    const corsOptions = {
        origin: "https://ryan-react-app.herokuapp.com/",
        optionsSuccessStatus: 200
    };

    app.use(cors(corsOptions));
    app.disable('x-powered-by');

    app.use(function(req, res, next) {
        // Website to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'https://ryan-react-app.herokuapp.com/');
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

require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 8080;
const secret = process.env.SECRET;

const config = {
    development: {
        port: port,
        dbURL: 'mongodb://localhost:27017/ryan-db',
        authCookieName: 'x-auth-token',
        loggedIn: 'false',
        secret: secret,
    },
    production: {
        
        dbURL: process.env.MONGODB_URI,
        authCookieName: 'x-auth-token',
        loggedIn: 'false',
        secret: secret,}
};

module.exports = config[env];
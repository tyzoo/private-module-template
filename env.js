const dotenv = require('dotenv');

dotenv.config();

if(!process.env.NODE_AUTH_TOKEN){
    throw Error(`Missing NODE_AUTH_TOKEN in .env`)
}
const path = require('path');

// import .env variables
require('dotenv-safe').load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
});

module.exports = {
  env: process.env.NODE_ENV,
  port: 80,
  jwtSecret: "bA2xcjpf8y5aSUFsNB2qN5yymUBSs6es3qHoFpGkec75RCeBb8cpKauGefw5qy4",
  jwtExpirationInterval: 1440,
  mongo: {
    uri: "mongodb+srv://Favorlion:favorlion@cluster0-nlpc3.mongodb.net/ipburger?retryWrites=true"
  },
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
};

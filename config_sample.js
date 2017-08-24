var config = {};

config.path = "/PATH/TO/multipart/"; // include trailing "/"

config.host = "localhost";
config.host = 8000;

config.database = {
  "name": "Documents",
};

config.auth = {
  user: 'USERNAME',
  pass: 'PASSWORD',
  sendImmediately: false
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = config;
}

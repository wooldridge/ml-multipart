var config = require('./config'),
    rp = require('request-promise'),
    fs = require('fs');

function post() {
  var buffer = fs.readFileSync('simple-body');
  var options = {
    method: 'POST',
    uri: 'http://' + config.host + ':' + config.port +
         '/LATEST/documents',
    auth: config.auth,
    body: buffer,
    headers: {
        'content-type': 'multipart/mixed; boundary=BOUNDARY',
        'accept': 'application/json'
    }
  };
  rp(options)
    .then(function (result) {
      console.log(result, null, 2);
    })
    .catch(function (err) {
      console.log(JSON.stringify(err, null, 2));
    });

}

post();

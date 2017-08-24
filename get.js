var config = require('./config'),
    rp = require('request-promise'),
    fs = require('fs');

function get() {
  var options = {
    method: 'GET',
    uri: 'http://' + config.host + ':' + config.port +
         '/LATEST/documents?category=content&category=permissions' +
         '&category=quality&format=json&uri=doc1.xml&uri=doc2.json',
    auth: config.auth,
    headers: {
        'accept': 'multipart/mixed; boundary=BOUNDARY'
    }
  };
  rp(options)
    .then(function (result) {
      console.log(result);
    })
    .catch(function (err) {
      console.log(JSON.stringify(err, null, 2));
    });

}

get();

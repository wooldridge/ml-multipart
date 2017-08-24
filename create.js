var fs = require('fs');

function getType(file) {
  return 'application/json';
}

function getDisp(file) {
  return 'attachment; filename="' + file + '"';
}

function getDispMeta(file) {
  return 'attachment; filename="' + file + '"; category=metadata';
}

function getLength(buffer) {
  return Buffer.byteLength(buffer.toString());
}

function create(options, boundary) {
  var result = ''
  buffer = fs.readFileSync(options.file);
  if (options.metadata) {
    var meta = JSON.stringify(options.metadata);
    result += '--' + boundary + '\r\n';
    result += 'Content-Type: ' + getType(options.file) + '\r\n';
    result += 'Content-Disposition: ' + getDispMeta(options.file) + '\r\n';
    result += 'Content-Length: ' + getLength(meta) + '\r\n';
    result += '\r\n';
    result += meta.replace(/(\r\n|\n|\r)/gm,"") + '\r\n';
  }
  result += '--' + boundary + '\r\n';
  result += 'Content-Type: ' + getType(options.file) + '\r\n';
  result += 'Content-Disposition: ' + getDisp(options.file) + '\r\n';
  result += 'Content-Length: ' + getLength(buffer) + '\r\n';
  result += '\r\n';
  result += buffer.toString().replace(/(\r\n|\n|\r)/gm,"") + '\r\n';
  result += '--' + boundary + '--\r\n';
  console.log(result);
  fs.writeFileSync('test', result);
}

create({file: 'doc.json', metadata: {quality: 2}}, 'BOUNDARY');

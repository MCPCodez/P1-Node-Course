// Node stuffs
var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  q.pathname = q.pathname + '.html';
  console.log(q);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
        if(filename == './.html'){
            var newD = fs.readFileSync('./index.html', 'utf8');
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(newD);
            return res.end();
        }
        var newData = fs.readFileSync('./404.html', 'utf8');
        res.writeHead(404, {'Content-type': 'text/html'});
        res.write(newData);
        console.log(err);
        return res.end();
    } 

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080); 
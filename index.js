const target = "https://api.real-debrid.com/";
const host = "api.real-debrid.com";
const port = 8080;

var http = require('http'),
    httpProxy = require('http-proxy');
const process = require('process');

const token = process.argv.length === 3 ? process.argv[2] : "";

if(token === "")
    console.error("Token not set! Please set token!");

var proxy = httpProxy.createProxyServer({});
var server = http.createServer(function(req, res) {
    req.headers.host = host;
    req.headers.authorization = `Bearer ${token}`;
  proxy.web(req, res, { target: target });
});

console.log(`listening on port ${port}`)
server.listen(port);
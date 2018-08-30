//引入模块
var http = require('http');
var url = require('url');
//启http服务
var server = http.createServer(function(req, res) {
    var cbName = url.parse(req.url, true).query.callback;
    res.end(cbName + '(' + JSON.stringify({ code: 345 }) + ')');
});
//监听
server.listen(8888, function() {
    console.log('listen this port is:' + server.address().port + '');
});
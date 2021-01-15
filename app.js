const http = require('http');
const querystring = require('querystring');

http.createServer(function (req, res) {
    res.writeHeader(200, {
        "access-control-allow-origin": "*",
    });


    req.on('data', function (data) {
        var str = data.toString();
        console.log(querystring.parse(str).demo)

        req.on('end', function () {
            let sendData = {
                name: 'lisi'
            }
            res.end(JSON.stringify(sendData));
        });
    });

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

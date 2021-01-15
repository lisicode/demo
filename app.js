const http = require('http');

http.createServer(function (req, res) {
    res.writeHeader(200, {
        "access-control-allow-origin": "*",
    });


    req.on('data', function (data) {


        req.on('end', function () {
            let sendData = {
                name: 'lisi'
            }
            res.end(JSON.stringify(sendData));
        });
    });

}).listen(8080);

console.log('Server running at http://127.0.0.1:8080/');

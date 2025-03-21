var http = require('http');
var fs = require('fs');

var portnum = 1337;

function serveStaticFile(res, path, contentType, responseCode) {
    if(!responseCode){
        responseCode = 200;
    }
    fs.readFile(__dirname + path, function(err, data) {
        if(err) {
            res.writeHead(responseCode, {'Content-Type': 'text/plain'});
            res.end('500 - Internal Error');
        }
        else {
            res.writeHead(responseCode, {'Content-Type': contentType});
            res.end(data);
        }
    });
};

http.createServer(function(req, res)  {
    req.url = req.url.toLowerCase();
    switch(req.url) {
        case '/':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case 'index':
            serveStaticFile(res, '/public/index.html', 'text/html');
            break;
        case '/posts':
            serveStaticFile(res, '/public/posts.html', 'text/html');
            break;
        case '/contact':
            serveStaticFile(res, '/public/contact.html', 'text/html');
            break;
        case '/404':
            serveStaticFile(res, '/public/404.html', 'text/html');
            break;
        case '/under-construction':
            serveStaticFile(res, '/public/under-construction.html', 'text/html');
            break;
        case '/css/style.css':
            serveStaticFile(res, '/public/css/style.css', 'text/css');
            break;
        case '/images/logo.png':
            serveStaticFile(res, '/public/images/logo.png', 'image/png');
            break;
        case '/images/404bottom.gif':
            serveStaticFile(res, '/public/images/404bottom.gif', 'image/gif');
            break;
        case '/images/404mid.gif':
            serveStaticFile(res, '/public/images/404mid.gif', 'image/gif');
            break;
        case '/images/404top_w.jpg':
            serveStaticFile(res, '/public/images/404top_w.jpg', 'image/jpeg');
            break;
        case '/images/blogging.png':
            serveStaticFile(res, '/public/images/blogging.png', 'image/png');
            break;
        case '/images/computer-typing.jpeg':
            serveStaticFile(res, '/public/images/computer-typing.jpeg', 'image/jpeg');
            break;
        case '/images/construction.png':
            serveStaticFile(res, '/public/images/construction.png', 'image/png');
            break;
        case '/images/merch.png':
            serveStaticFile(res, '/public/images/merch.png', 'image/png');
            break;
        case '/images/x.png':
            serveStaticFile(res, '/public/images/x.png', 'image/png');
            break;
        default:
            serveStaticFile(res, '/public/404.html', 'text/html', 404);
            break;
    }
}).listen(portnum, function() {
    console.log(`Server running at http://localhost:${portnum}/`);
});
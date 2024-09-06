const http = require("http");
const PORT = 8000;
const fs = require('fs');
const url = require('url');

const indexPage = fs.readFileSync('./index.html', 'UTF-8');
const styleCss = fs.readFileSync('./css/style.css', 'UTF-8');
const scriptJs = fs.readFileSync('./script.js', 'UTF-8');
const server = http.createServer(RouteSetting);

server.listen(PORT, () => {
    console.log("server runnung!");
});

function RouteSetting(req, res) {
    const url_parts = url.parse(req.url);
    switch (url_parts.pathname) {
        case '/':
        case '/index.html':
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(indexPage);
            res.end();
            break;
        case '/css/style.css':
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(styleCss);
            res.end();
            break;
        case '/js/script.js':
            res.writeHead(200, {'Content-Type':'application/javascript'});
            res.write(scriptJs);
            res.end();
            break;

        default: 
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('お探しのページは見つかりません。');
            break;
    }
}
const http = require("http");
const PORT = 8000;
const fs = require('fs');
const url = require('url');
const express = require("express");
const app = express();
const userRouter = require("../routes/user");

const indexPage = fs.readFileSync('./index.html', 'UTF-8');
const styleCss = fs.readFileSync('./css/style.css', 'UTF-8');
const scriptJs = fs.readFileSync('./script.js', 'UTF-8');
const server = http.createServer(RouteSetting);

app.use(express.static(__dirname));


app.get("/", (req, res) => {
    //    console.log("hellow express");
    //    res.send("<h1>こんにちは</h1>");
    //    res.sendStatus(404);
    //    res.status(500).send("エラーです。");
    res.status(500).json({ msg: "エラーです。"});
});
//  routing
app.use("/user", userRouter);


app.listen(PORT, () => {
    console.log("server running!");
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
        case '/script.js':
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
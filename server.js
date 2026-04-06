const http = require('http');

const server = http.createServer((req, res)=>{

    const {method, url} = req;

    if(url === '/' && method === 'GET'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end("<h1>Главная страница</h1>");
    }else if(url === "/about" && method === "GET"){
        res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end("О нас");
    }else {
        res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end("Страница не найдена");
    }


});

server.listen(3000, ()=>{
    console.log("Сервер запущен!");
})
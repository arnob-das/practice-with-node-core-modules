const http = require('http');
const url = require('url');
const fs = require('fs');


const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write('<p>Welcome to full stack development!</p>');
        res.end();
    }
    else if(req.url === '/read'){
        const data = fs.readFileSync('./first.txt');
        res.write(data);
        res.end();
    }
    else if(req.url == '/write'){
        const data = fs.readFileSync('./first.txt');
        fs.writeFileSync('./second.txt', data);
        res.end();
    }
    else if(req.url == '/append'){
        fs.appendFileSync('./first.txt', 'Yeah, Great! You are learning Full Stack Development!')
        res.end();
    }
    else if(req.url == '/delete'){
        fs.rmSync('./second.txt')
        res.end();
    }

})

const PORT = 5000;
server.listen(PORT);
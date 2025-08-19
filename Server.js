const http = require('http');
const fs = require('fs');

const Server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    console.log("URL:", req.url);

    res.setHeader('Content-Type', 'text/html');

    fs.readFile('.index.html', (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            res.end(data);
        }
        console.log("Response sent.");
    });
});

Server.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
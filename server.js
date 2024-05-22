import { log } from "console";
import http from "http";

const port = 3000;

const routes = {
    "/": "Node.js training",
    "/books": "Accessing BOOKS",
    "/authors": "Accessing AUTHORS"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain"});
    // console.log("req: ", req.url);
    res.end(routes[req.url]);
});

server.listen(port, () => {
    console.log("Server listening");
})
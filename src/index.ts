import express from "express";

const server = express();
const port = 3000;

server.get('/blog-posts', (req, res) => {
    res.send('Hello, Mark Donile!');
});

server.listen(3000, () => {
    console.log(`Listening on port ${port}`);
});
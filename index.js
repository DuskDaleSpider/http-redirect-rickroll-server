require('dotenv').config();
const express = require('express');
const volleyball = require('volleyball');
const db = require('./db/connection');

const app = express();
app.use(volleyball);
const port = process.env.RICKROLL_PORT || 5000;

const logAndRedirct = (req, res) => {
    //1. log req in the mogo d
    let row = {
        date: Date().toString(),
        host: req.hostname,
        method: req.method,
        path: req.path,
        query: req.query,
        headers: req.headers
    };

    db.get("request_logs").insert(row).then((result) => {
        console.log("Row inserted!");
        res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    });
    
};

app.get("*", logAndRedirct);
app.post("*", logAndRedirct);
app.delete("*", logAndRedirct);
app.put("*", logAndRedirct);

app.listen(port, () => {
    console.log(`Started listening at http://localhost:${port}`);
});


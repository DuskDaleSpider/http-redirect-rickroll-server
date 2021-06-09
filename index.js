const express = require('express');
require('dotenv').config()

const app = express();
const port = process.env.RICKROLL_PORT || 5000;

const logAndRedirct = (req, res) => {
    //1. log req in the mogo db
    

    //2. rickroll
    res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
};

app.get("*", logAndRedirct);
app.post("*", logAndRedirct);
app.delete("*", logAndRedirct);
app.put("*", logAndRedirct);

app.listen(port, () => {
    console.log(`Started listening at http://localhost:${port}`);
})
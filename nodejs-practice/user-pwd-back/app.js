const express = require('express');
const app = express();

app.use((req, res, nex) => {
    console.log('Test request!!!');
})

module.exports = app;
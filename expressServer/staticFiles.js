const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(7000, console.log('staticFiles: 7000'));
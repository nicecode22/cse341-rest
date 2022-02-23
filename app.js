const express = require('express');

const feedRoutes = require('./routes/feed');

// GET /feed/post
app.use('/feed', feedRoutes)

const app = express();

app.listen(8080);
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')

const PORT = process.env.PORT || 3000

const app = express()

app.use(routes)

async function start() {
    try {
        app.listen(PORT, () => {
            console.log('sever has been started on port ...', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

app.use(function(req, res, next) {
    res.status(404).send('Sorry cant find that page!');
  });

start()
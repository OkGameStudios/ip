const express = require ('express')
const app = express()
const nodemailer = require ('nodemailer');
const fetch = require('node-fetch')
const { lookup } = require('geoip-lite')

const router = express.Router()
// const ip = fetch('https://api.ipify.org/?format=json').then(results => results.json()).then(data => console.log(data.ip))
// const ipresolved = Promise.resolve(ip)


app.set('view-engine', 'ejs')


router.get('/', (req,res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    console.log(ip); // ip address of the user
    console.log(lookup(ip))
  });

  app.use('/', router)

app.get('/', (req, res) => {
    res.render('index.ejs')
})
// async..await is not allowed in global scope, must use a wrapper

 

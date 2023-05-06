// .env configuration
require('dotenv').config();
// Dependencies

const express = require('express')
const app = express()
const Flight = require('./models/Flight');
const db = require('./config/database');
const PORT = process.env.PORT || 3000;

//View Engine Middleware
const reactViewsEngine = require("jsx-view-engine").createEngine()
//^ same as reactViewsEngine.createEngine()
app.engine('jsx', reactViewsEngine);
app.set("view engine", "jsx")
app.set('views', "./views") // look for the views inside the views folders

// Custom Middleware
app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
    console.log("Middleware Running")
    next()
})

app.use(express.static('public'))



const myFirstFlight = {
    airline: 'American',
    flightNo: 78,
  };

// Flight.create(myFirstFlight)
//   // if database transaction succeeds
//   .then((flight) => {
//     console.log(flight);
//   })
//   // if database transaction fails
//   .catch((error) => {
//     console.log(error);
//   })
//   // close db connection either way
//   .finally(() => {
//     db.close();
//   });

// Index

  app.get('/flights', async (req, res) => {
    console.log('Index Controller Func. running...');
    try {
      const foundFlight = await Flight.find({})
      res.render('Index', { flights: foundFlight});
    } catch (err) {
      res.status(400).send(err);
    }
  });

// New

  app.get('/flights/new', async (req, res) => {
      res.render('New')
  })

// Delete

// Update

// Create

app.post('/flights', async (req, res) => {
  try {
    const newFlight = await Flight.create(req.body);
    console.log(newFlight);
    //console.log(fruits);
    // redirect is making a GET request to whatever path you specify
    res.redirect('/flights');
  } catch (err) {
    res.status(400).send(err);
  }
});

// Show

app.get('/flights/:id', async (req, res) => {
  try {
    const foundFlight = await Flight.findById(req.params.id)
    res.render('Show', {
      flight: foundFlight
    });
  }catch(err) {
    res.status(400).send(err);
  }
});

// setTimeout(() => {
//     db.close();
//   }, 5000);

  // Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
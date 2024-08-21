const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');

const mongoose = require('mongoose');

const userRoutes = require('./routes/user.route');

mongoose.connect('mongodb+srv://ekkobeatmaker:dk2VeYUd3dbMYOJD@cluster0.kwob1rw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log('Connexion a MongoDB reussie !'))
  .catch((err) => console.log('Connexion a MongoDB echouee !', err.message));
  

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/form', userRoutes);

module.exports = app;
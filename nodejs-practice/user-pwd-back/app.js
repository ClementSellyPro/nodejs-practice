const express = require('express');
const app = express();

const mongoose = require('mongoose');
const User = require('./model/user.model');

mongoose.connect('mongodb+srv://ekkobeatmaker:dk2VeYUd3dbMYOJD@cluster0.kwob1rw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log('Connexion a MongoDB reussie !'))
  .catch((err) => console.log('Connexion a MongoDB echouee !', err.message))
  

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.get('/api/form', (req, res) => {
    User.find()
      .then(user => res.status(200).json(user))
      .catch(error => res.status(400).json({ error }));
})

app.post('/api/form', (req, res) => {
    const user = new User({
      ...req.body
    });
    user.save()
      .then(() => res.status(201).json({message: 'User created !'}))
      .catch(error => res.status(400).json({ error }));
})

module.exports = app;
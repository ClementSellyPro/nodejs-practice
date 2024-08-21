const bcrypt = require('bcryptjs');
const User = require('../model/user.model');

exports.createUser = (req, res) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const newUser = new User({
        name: req.body.name,
        password: hash
      });

      newUser.save()
        .then(() => res.status(201).json({message: 'User created !'}))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

exports.getUsers = (req, res) => {
  User.find()
    .then(user => res.status(200).json(user))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteUser = (req, res) => {
  User.deleteOne({_id: req.body.id})
  .then(() => res.status(200).json({ message: 'User deleted !'}))
  .catch(error => res.status(400).json({ error }));
};

exports.login = (req, res) => {
  User.findOne({name: req.body.name})
  .then(user => {
    if(!user){
      return res.status(401).json({message: 'Paire login/mot de passe incorrecte'});
    }
    bcrypt.compare(req.body.password, user.password)
    .then(valid => {
      if(!valid){
        return res.status(401).json({message: 'Paire login/mot de passe incorrecte'});
      }
      res.status(200).json({
        name: user.name,
        password: user.password,
        token: 'TOKEN'
      });
    })
    .catch(error => res.status(502).json({error}));
  })
  .catch(error => res.status(501).json({error}));
};
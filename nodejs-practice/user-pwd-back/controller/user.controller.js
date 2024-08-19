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
  .then(() => res.status(200).json({ message: 'Objet supprime ! '}))
  .catch(error => res.status(400).json({ error }));
}
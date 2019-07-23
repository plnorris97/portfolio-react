const db = require("../Models");


// Defining methods
module.exports = {
    findAll: function(req, res) {
      console.log('find all work')
      db.work
        .find({})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByCategory: function(req, res) {
      console.log('find by category')
      db.work
        .find({category: category})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findByTech: function(req, res) {
        console.log('find by tech')
        db.work
          .find({tech: tech-used})
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    create: function(req, res) {
     console.log('adding new work')
      db.work
        .create({title: title})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    // update: function(req, res) {
    //   db.Book
    //     .findOneAndUpdate({ _id: req.params.id }, req.body)
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // },
    // remove: function(req, res) {
    //   db.Book
    //     .findById({ _id: req.params.id })
    //     .then(dbModel => dbModel.remove())
    //     .then(dbModel => res.json(dbModel))
    //     .catch(err => res.status(422).json(err));
    // }
  };
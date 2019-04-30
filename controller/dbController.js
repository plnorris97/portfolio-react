const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Work
      .find(req.query)
      .then(resp => res.json(resp))
      .catch(err => res.status(422).json(err));
  },
//   findById: (req, res) => {
//     db.Work
//       .findById(req.params.id)
//       .then(resp => res.json(resp))
//       .catch(err => res.status(422).json(err));
//   },
  // create: (req, res) => {
  //   console.log(req.body)
  //   const newBook = new Book({
  //     title:req.body.input.title,
  //     authors:req.body.input.authors,
  //     description: req.body.input.description,
  //     bookImg: req.body.input.bookImg,
  //     link: req.body.input.selfLink
  //   });
  //   console.log(newBook);
  //   newBook.save(err=>{
  //     console.log(err)
  //   })
  // },
  create: function(req, res) {
    db.Work
      .create(req.body)
      .then(resp => res.json(resp))
      .catch(err => res.status(422).json(err));
  },
  remove: (req, res) => {
    db.Work
      .findById({ _id: req.params.id })
      .then(resp => resp.remove())
      .then(removed => res.json(removed))
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    db.Work
        .findOneAndUpdate({_id:req.params.id}, req.body)
        .then(resp => res.json(resp))
        .catch(err =>res.json(err))
  }
};
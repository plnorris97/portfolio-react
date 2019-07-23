const mongoose = require("mongoose");
const db = require("../Models");


mongoose.connect(
 process.env.MONGODB_URI ||
 "mongodb://localhost/project-work"
);

const workSeeds =[
    {
        "id": "1",
        "title": "",
        "description": "",
        "image": "",
        "tech-used": "",
        "category": "",
        "app-link": "",
        "code-link": ""
    },
    {

    },

]


db.work
.remove({})
 .then(() => db.Works.collection.insertMany(workSeeds))
 .then(data => {
   console.log(data.result.n + " records inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });
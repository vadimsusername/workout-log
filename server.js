let mongoose = require("mongoose");
let db = require("./models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


db.Workout.find({}).populate("exercises").then(dbWorkout => {
    console.log(dbWorkout);
    process.exit(0);
  }).catch(err =>{
    console.log(err);
    process.exit(1);
  });
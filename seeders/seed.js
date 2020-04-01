let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 100,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 285,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-4),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-3),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 300,
        reps: 10,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {
        type: "cardio",
        name: "Swimming",
        duration: 30,
        distance: 2
      }
    ]
  }
];

/* db.Workout.deleteMany({})
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  }); */

 /*  db.Workout.create({day: new Date().setDate(new Date().getDate()-1)}).then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    console.log(message);
  });

  db.Workout.create({day: new Date().setDate(new Date().getDate()-2)}).then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    console.log(message);
  }); */

  /* db.Exercise.create({
    type: "resistance",
    name: "Bench Press",
    duration: 20,
    weight: 300,
    reps: 10,
    sets: 4
  })
  .then(({ _id }) => db.Workout.findByIdAndUpdate("5e83e0a05089cb4e7c7f93fb", { $push: { exercises: _id } }, { new: true }))
  .then(dbExercise => {
    console.log(dbExercise);
  })
  .catch(err => {
    console.log(err);
  }); */
/* 
  db.Workout.find({}).populate("exercises").then(dbWorkout => {
    console.log(dbWorkout);
    process.exit(0);
  }).catch(err =>{
    console.log(err);
    process.exit(1);
  }); */
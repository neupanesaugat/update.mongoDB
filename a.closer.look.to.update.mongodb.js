use("kec-crud");

// db.scores.find();

//* $set

// db.scores.updateOne({ name: "Subham" }, { $set: { name: "Rajan" } });

// db.scores.updateMany({}, { $set: { age: 21 } }); //? adds age terms as there is no age field and {} means all the fields

//* $unset => removes that field

// db.scores.updateOne({ name: "Rajan" }, { $unset: { age: "" } });

// db.scores.find();

//? update age of Rajan to 30
// db.scores.updateOne({ name: "Rajan" }, { $set: { age: 30 } });

//? update age of Suyasha to 40
// db.scores.updateOne({ name: "Suyasha" }, { $set: { age: 40 } });

//? $inc => increases field value of field by provided value

// db.scores.updateMany(
//   {},
//   {
//     $inc: {
//       age: 5,
//     },
//   }
// );

// db.scores.insertOne({
//   name: "Smarika",
//   scores: [42, 65, 88],
//   points: [
//     {
//       sub: "Social",
//       point: 67,
//     },
//     {
//       sub: "Science",
//       point: 89,
//     },
//   ],
//   age: 30,
// });

// db.scores.updateMany({ name: "Smarika" }, { $inc: { age: -10 } });

//* $mul => multiply

// db.scores.updateOne(
//   { _id: ObjectId("66829a5bf3c4ba71cc8d320f") },
//   { $mul: { age: 2 } }
// );

//? divide Suyasha age by 2

// db.scores.updateOne({ name: "Suyasha" }, { $mul: { age: 1 / 2 } });
// db.scores.find();

//* $rename => rename field

// db.scores.updateMany(
//   {},
//   {
//     $rename: {
//       scores: "marks",
//     },
//   }
// );

//* $min, $max

//* $min => the value greater than specified value is set to the min value
// db.scores.updateMany(
//   {},
//   {
//     $min: {
//       age: 16,
//     },
//   }
// );

//* $max => the value less than specified value is set to the max value
// db.scores.updateMany(
//   {},
//   {
//     $max: {
//       age: 50,
//     },
//   }
// );

// db.scores.updateMany(
//   {},
//   {
//     $set: {
//       luckyThings: {
//         number: 7,
//         color: "Green",
//       },
//     },
//   }
// );

//? update lucky color of Suyasha to "Blue"
// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $set: {
//       "luckyThings.color": "Blue",
//     },
//   }
// );

//? update lucky number of Smarika to 8
// db.scores.updateOne(
//   { _id: ObjectId("66829a5bf3c4ba71cc8d320f") },
//   {
//     $set: {
//       "luckyThings.number": 8,
//     },
//   }
// );
db.scores.find();

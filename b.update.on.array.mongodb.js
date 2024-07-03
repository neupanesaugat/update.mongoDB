use("kec-crud");

//? update on array

//* $push
//? add 92 on marks of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $push: {
//       marks: 92,
//     },
//   }
// );

//? add 87 and 93 to marks of Suyasha
// db.scores.updateOne(
//   { _id: ObjectId("66851fe59976d8b4cf843809") },
//   {
//     $push: {
//       marks: { $each: [87, 93] }, //? $each => push value in array rather than pushing the entire array
//     },
//   }
// );

//* $pop
//? 1 => removes item from end of array
//? -1 => removes item form starting of array

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: 1,
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Suyasha" },
//   {
//     $pop: {
//       marks: -1,
//     },
//   }
// );

//* $pull => removes item based on condition

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       marks: { $lt: 70 },
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Smarika" },
//   {
//     $pull: {
//       points: { sub: "Science" },
//     },
//   }
// );

//? update Suyasha sub from Science to Maths

// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     $set: { "points.$.sub": "Maths" },
//   }
// );
db.scores.find();

// ?pull item which has sub "Science" and marks less than 88 from Rajan's data

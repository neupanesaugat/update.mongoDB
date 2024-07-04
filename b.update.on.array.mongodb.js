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

// ?pull item which has sub "Science" and marks less than 88 from Rajan's data

// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $pull: {
//       points: {
//         sub: "Science",
//       },
//       marks: { $lt: 88 },
//     },
//   }
// );

//* $pullAll
//? we give concrete value that needs to be removed (no condition)

// db.scores.updateOne(
//   { _id: ObjectId("66851fe59976d8b4cf843809") },
//   {
//     $pullAll: {
//       marks: [42, 65],
//     },
//   }
// );

//? push 78,67,83 to the marks array of Rajan
// db.scores.updateOne(
//   { name: "Rajan" },
//   { $push: { marks: { $each: [78, 67, 83] } } }
// );

//* $addToSet => do not repeat the value which is already in the field

// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $addToSet: {
//       marks: { $each: [95, 83, 88, 52] },
//     },
//   }
// );

// db.scores.updateOne(
//   { name: "Rajan" },
//   { $addToSet: { points: { sub: "Social", point: 83 } } } //? if the point was also 82 then it wouldn't be add in the dataset
// );

//? push an object with sub: Science and point: 92 on Suyasha points
// db.scores.updateOne(
//   { name: "Suyasha" },
//   { $push: { points: { sub: "Science", point: 92 } } }
// );

//? push 57,88,96 on Suyasha's marks such that no value is duplicated
// db.scores.updateOne(
//   { name: "Suyasha" },
//   { $addToSet: { marks: { $each: [57, 88, 96] } } }
// );
//? change Rajan's lucky color to "orange"
// db.scores.updateOne(
//   { name: "Rajan" },
//   { $set: { "luckyThings.color": "Orange" } }
// );
//? pull last item from Rajan's points
// db.scores.updateOne({ name: "Rajan" }, { $pop: { points: 1 } });
//? decrease age of Smarika by 20
// db.scores.updateOne(
//   { _id: ObjectId("66829a5bf3c4ba71cc8d320f") },
//   { $inc: { age: -20 } }
// );
//? push {sub:"C Programming", point: 72} and {sub:"C++",point:65} on Smarika's points
// db.scores.updateOne(
//   { _id: ObjectId("66851fe59976d8b4cf843809") },
//   {
//     $push: {
//       points: {
//         $each: [
//           { sub: "C Programming", point: 72 },
//           { sub: "C++", point: 65 },
//         ],
//       },
//     },
//   }
// );
// ? divide age of Rajan by 2
// db.scores.updateOne({ name: "Rajan" }, { $mul: { age: 1 / 2 } });

db.scores.find();

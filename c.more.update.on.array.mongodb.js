use("kec-crud");

//? $ (operator)
//? $ => element which match the document

//? update sub of Suyasha in points from Maths to Statistics
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Maths" },
//   {
//     $set: {
//       "points.$.sub": "Statistics",
//     },
//   }
// );

//? change the point of Science to 93
// db.scores.updateOne(
//   { name: "Suyasha", "points.sub": "Science" },
//   {
//     $set: {
//       "points.$.point": 93,
//     },
//   }
// );

//? update subject from C Programming to Java and point to 69 from Smarika's data

// db.scores.updateOne(
//   { name: "Smarika", "points.sub": "C Programming" },
//   {
//     $set: {
//       "points.$.sub": "Java",
//       "points.$.point": 69,
//     },
//   }
// );

//? update all the point of smarika to 70
// db.scores.updateOne(
//   { _id: ObjectId("66851fe59976d8b4cf843809") },
//   {
//     $set: {
//       "points.$[].point": 70,
//     },
//   }
// );

//? update point to 75 for each sub which has point below 70 for Smarika
// db.scores.updateOne(
//   { _id: ObjectId("66829a5bf3c4ba71cc8d320f") },
//   {
//     $set: {
//       "points.$[element].point": 75,
//     },
//   },
//   {
//     arrayFilters: [{ "element.point": { $lt: 70 } }],
//   }
// );

//? decrease each marks of Rajan by 10
// db.scores.updateOne(
//   { name: "Rajan" },
//   {
//     $inc: {
//       "marks.$[]": -10,
//     },
//   }
// );

//? set 57 marks to 77 to Suyasha's marks
// db.scores.updateOne(
//   { name: "Suyasha", marks: 57 },
//   {
//     $set: {
//       "marks.$": 77,
//     },
//   }
// );

//? decrease each marks which are greater than 90 by 10 marks of Smarika
// db.scores.updateOne(
//   { _id: ObjectId("66851fe59976d8b4cf843809") },
//   {
//     $inc: {
//       "marks.$[element]": -10,
//     },
//   },
//   {
//     arrayFilters: [{ element: { $gt: 90 } }],
//   }
// );
db.scores.find();

"use strict";
// enum CardinalDirections {
//     North,
//     East,
//     South,
//     West
// }
// let currentDirection = CardinalDirections.North;
// console.log(currentDirection)
// console.log(CardinalDirections)
// enum CardinalDirections {
//     North = 1,
//     East,
//     South,
//     West
// }
// let currentDirection = CardinalDirections.North;
// console.log(currentDirection)
// console.log(CardinalDirections)
// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   }
//   // logs 404
//   console.log(StatusCodes.NotFound);
//   // logs 200
//   console.log(StatusCodes.Success);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
;
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

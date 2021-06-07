"use strict";
// ${this.table} will not work inside a function

// * House

this.table = "window table";
console.log(this.table);

// const cleanTable = function(soap) {
//   const innerFunction = _soap => {
//     console.log(`Cleaning ${this.table} using ${_soap}`);
//   };
//   innerFunction(soap);
// };

// cleanTable.call(this, "some soap");

// * Public Property

this.garage = {
  table: "garage table"
};
console.log(this.garage.table);

class createRoom {
  constructor(name) {
    this.table = `${name}'s table`;
  }
  cleanTable(soap) {
    console.log(`Cleaning ${this.table} using ${soap}`);
  }
}

// let johnsRoom = {
//   table: "johns table"
// };

// let createRoom = function(name) {
//   this.table = `${name}s room`;
// };

// createRoom.prototype.cleanTable = function(soap) {
//   console.log(`Cleaning ${this.table} using ${soap}`);
// };

const jillsRoom = new createRoom("jill");
const johnsRoom = new createRoom("john");

console.log(jillsRoom);
console.log(johnsRoom);

jillsRoom.cleanTable("some soap");
johnsRoom.cleanTable("some soap");

// console.log(this.johnsRoom.table); // Cannot Read Property
// console.log(johnsRoom.table);

// cleanTable.call(this, "some soap");
// cleanTable.call(this.garage, "some soap");
// cleanTable.call(johnsRoom, "some soap");

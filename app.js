// NODE JS
// Its a environment to run javascript

// FE -> Jquery, angular, react...
// 2009 Ryan Dahl -> PhD work -> integrate JS + chrome V8 => Node
// V8 + C++ => Node

// Why Node?
// JS => React + Node -> FSD
// Extremely fast ->

/**
 * Single threaded asynchronous language
 * It follows non blocking I/O operations
 **/

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 1000);

// console.log(3);

// IO based -> Node js preferred
// CPU intensive -> It is not preferred

// Multi threading -> additional work

// console.time();
// let i = 0;
// while (i < 100000000000) {
//   i++;
// }
// console.timeEnd();

// console.log(window); // error
// console.log(global); // replacement of windows

// Node JS -> modular system

// (function () {
// console.log(10);

// function display() {
//   console.log(20);
// }

// display();
// })();
// IIFE -> Immediately Invoked Function expression

// (function (name) {
//   console.log("vasanth fn", name);
// })("good boy");

// modules -> each and every JS file forms a module
// console.log(module);

// const logger = require("./logger");
// const { add, sub } = require("./logger");

// // console.log("logger", logger.add(5, 10));
// console.log("add", add(5, 10));
// console.log("sub", sub(15, 10));
// console.log("global----", global);

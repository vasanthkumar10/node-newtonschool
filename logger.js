// (function (exports, require, module, __filename, __dirname) {
//   console.log("exports", exports);
//   console.log("require", require);
//   console.log("module", module);
//   console.log("__filename", __filename);
//   console.log("__dirname", __dirname);
// })(exports, require, module, __filename, __dirname);

// console.log("exports", exports);
// console.log("require", require);
// console.log("module", module);
// console.log("__filename", __filename);
// console.log("__dirname", __dirname);

function add(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

// default -> export default add
// module.exports = add;

// named exports
// module.exports.addition = add;

// best approach
module.exports = {
  add,
  sub,
};

console.log("exports", module);

// Node -> modular programming

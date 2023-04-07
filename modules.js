// MODULE -> Its a single JS File (single purpose library)

// NPM -> Node Package Manager -> 3rd party libraries

// path module
// const path = require("path");

// console.log("filename -> ", __filename);
// console.log(path.parse(__filename));

// console.log("dirname -> ", __dirname);
// console.log(path.parse(__dirname));

// OS
// const os = require("os");

// console.log(os.cpus(), os.cpus().length);
// console.log(os.totalmem()); // data in bytes
// console.log(os.freemem());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.networkInterfaces());

// File system module
const fs = require("fs");

// both synchronous and asynchronous

// synchronous
// const files = fs.readdirSync("./");
// console.log(files);

// asynchronous
// fs.readdir("./", (err, files) => {
//   if (err) console.log(err);
//   else console.log("files", files);
// });

// read files
// const fileData = fs.readFileSync("./demo.txt", "utf-8");
// console.log(fileData);

// fs.readFile("./demo.txt", "utf-8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// Write the data
// const person = {
//   name: "terminator",
//   age: 2034,
// };

// fs.writeFile("person.json", JSON.stringify(person), (err, data) => {
//   if (err) console.log(err);
//   else console.log("file saved");
// });

// const textData = "Today is good friday";
// fs.writeFile("friday.txt", textData, (err) => {
//   if (err) console.log(err);
//   else console.log("file saved");
// });

// // EVENTS
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// // listening the event
// emitter.on("messageReceived", () => {
//   console.log("message from client is received");
// });

// emitter.on("eventWithArgs", (args) => {
//   console.log("event with arguments", args);
// });

// // raise the event
// emitter.emit("messageReceived");
// emitter.emit("messageReceived");
// emitter.emit("eventWithArgs", {
//   name: "amazon boss",
//   company: "amazon",
// });

// CREATE SERVER
const http = require("http");

// listener function
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Welcome to Node class");
    res.end();
  }

  if (req.url === "/names") {
    res.write(JSON.stringify(["virat", "sachin", "dhoni"]));
    res.end();
  }

  if (req.url === "/user") {
    let user = {
      name: "vasanth",
      age: 10,
      place: "chennai",
    };
    res.write(JSON.stringify(user));
    res.end();
  }
});

// listener
server.on("connection", () => {
  console.log("New connection happened");
});

// trigger
server.listen(3000);
console.log("Server listening to port 3000....");

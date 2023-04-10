const crypto = require("crypto");

// const start = Date.now();
// // pbkdf -> password based key derivation function
// // SHA -> secured hashing algo
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log(Date.now() - start);
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// // crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");

// console.log(Date.now() - start);

// Asynchronous method

const start = Date.now();
const os = require("os");

console.log("CPU length", os.cpus().length);

// console.log(process.env);
process.env.UV_THREADPOOL_SIZE = 3;
// console.log(process.env);

const MAX_CALLS = 1000;

const https = require("https");

for (let i = 0; i < MAX_CALLS; i++) {
  // crypto.pbkdf2("password", "salt", 100000, 512, "sha512", () => {
  //   console.log(`Iteration-${i + 1}`, Date.now() - start);
  // });

  https
    .request("https://www.google.com", (res) => {
      res.on("data", () => {
        // console.log("got the data");
      });

      res.on("error", () => {
        console.log("error");
      });

      res.on("end", () => {
        console.log(`Iteration-${i + 1}`, Date.now() - start);
      });
    })
    .end();
}

const fs = require("fs");
const { setTimeout } = require("timers");

const stream = fs.createReadStream("big.txt");

//Modo 'data' (push)
stream.on("data", (data) => {
  console.log(data.toString());
  stream.pause();
  setTimeout(() => stream.resume(), 2000);
});

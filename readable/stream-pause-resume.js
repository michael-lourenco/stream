const fs = require("fs");
const { setTimeout } = require("timers");

const streamReadable = fs.createReadStream("../big.txt");

//Modo 'data' (push)
streamReadable.on("data", (data) => {
  console.log(data.toString());
  streamReadable.pause();
  setTimeout(() => streamReadable.resume(), 2000);
});

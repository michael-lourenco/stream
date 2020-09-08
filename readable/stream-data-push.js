const fs = require("fs");

const streamReadable = fs.createReadStream('../big.txt');

//Modo 'data' (push)
streamReadable.on("data", (data) => {
  console.log(data.toString());
});

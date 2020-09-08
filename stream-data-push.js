const fs = require("fs");

const stream = fs.createReadStream("big.txt");

//Modo 'data' (push)
stream.on("data", (data) => {
  console.log(data.toString());
});

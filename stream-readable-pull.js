const fs = require("fs");

const stream = fs.createReadStream("big.txt");

// Modo 'readable' (pull)
stream.on("readable", () => {
  console.log("readable");
  while ((chunk = stream.read())) {
    console.log(chunk.toString());
  }
});

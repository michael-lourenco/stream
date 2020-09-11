const fs = require("fs");

const streamReadable = fs.createReadStream("../big.txt");

// Modo 'readable' (pull)
streamReadable.on("readable", () => {
  console.log("readable");
  while ((chunk = streamReadable.read())) {
    console.log(chunk.toString());
  }
});

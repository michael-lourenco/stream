const fs = require("fs");
const { Transform } = require("stream");

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    const chunkUpper = (chunk + "").toUpperCase();
    this.push(chunkUpper);
    callback();
  },
});

fs.createReadStream("big.txt")
  .on("error", console.error)
  .pipe(upperCase)
  .on("error", console.error)
  .pipe(fs.createWriteStream("big-pipeline.txt"))
  .on("error", console.error)
  .on("finish", () => console.log("Done!"));

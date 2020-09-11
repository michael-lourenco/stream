const fs = require("fs");
const { Transform } = require("stream");

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    const chunkUpper = (chunk + "").toUpperCase();
    this.push(chunkUpper);
    callback();
  },
});

const streamReadable = fs.createReadStream("big.txt");
const streamWritable = fs.createWriteStream("big-upper.txt");

streamReadable.pipe(upperCase).pipe(streamWritable);

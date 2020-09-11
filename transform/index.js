const fs = require("fs");

const streamReadable = fs.createReadStream("big.txt");
const streamWritable = fs.createWriteStream("big-2.txt");

streamReadable.pipe(streamWritable);

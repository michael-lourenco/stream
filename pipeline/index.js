const fs =require('fs');
const { Transform } = require("stream");
const { pipeline } = require('stream');

const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    const chunkUpper = (chunk + "").toUpperCase();
    this.push(chunkUpper);
    callback();
  },
});

pipeline(
    fs.createReadStream('big.txt'),
    upperCase,
    fs.createWriteStream('big-good-pipeline.txt'),
    err=>{
        if(err){
            console.log('Deu erro',err);
        }else{
            console.log('Done!');
        }
    }
)


const fs = require("fs");

const streamWritable = fs.createWriteStream("teste.txt", {
  flags: "a",
  encoding: "utf8",
});

streamWritable.write("Adicionando dados ao arquivo\n");
streamWritable.end("Finalizou aqui\n");

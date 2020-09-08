const fs = require('fs');

const streamWritable = fs.createWriteStream('teste.txt',{
    flags:'w',
    encoding:'utf8'
});

 streamWritable.write('Sobreescrevendo no arquivo\n')
 streamWritable.end('Finalizou aqui\n')
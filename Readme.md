# Stream (computação)

Em ciência da computação, **stream**, em português **fluxo**, é uma sequência de elementos de dados disponibilizados ao longo do tempo. Um fluxo pode ser considerado como itens em uma esteira transportadora sendo processados um por vez, em vez de em grandes lotes.

Os fluxos **são processados de maneira diferente** dos dados em lote - as funções normais não podem operar em fluxos como um todo, pois têm dados potencialmente ilimitados e, formalmente, os fluxos são codatos (potencialmente ilimitados), não dados (que são finitos). Funções que operam em um fluxo, produzindo outro fluxo, são conhecidas como **filtros** e podem ser conectadas em **pipelines**, analogamente à **composição de funções**. Os filtros podem operar em um item de um fluxo de cada vez ou podem basear um item de saída em vários itens de entrada, como uma média móvel.

fonte: wikipedia (https://pt.wikipedia.org/wiki/Stream_(computa%C3%A7%C3%A3o))

# Readable Streams

## Módulo fs

Implementa o módulo stream do Nodejs

```
const fs = require('fs')
```

## Modo pausado

```
const streamReadable = fs.createReadStream('big.txt')
```

Este trecho abre uma stream e a deixa no modo pausado

## Modo push ( lendo dados constantemente)

Significa que ele diz, olha, toma ai os dados deste stream

Este trecho pega o readable que está pausado e com o **.on('data')** começa a receber todos os dados do arquivo em parte e continuamente.

```
streamReadable.on('data',data=>{
    console.log(data.toString())
})
```

## Modo readable (pull)

Significa que ele diz, olha, eu consigo ler dados deste stream

Ao contrŕario do push que empurra os dados pra gente,e este modo, pede os dados para o stream, ou seja, eu controlo o que recebo.
igual ao pull, sendo que em alguns lugares realmente chamam isso de fazer um pull de dados
chunk - este termo siginifica, geralmente, que possui uma parte dos dados totais. o pedaço de conteúdo lido pela stream num determinado momento. um punhado de dados.

```
streamReadable.on("readable", () => {
  console.log("readable");
  while ((chunk = streamReadable.read())) {
    console.log(chunk.toString());
  }
});
```

## Pausar o push/pull

Se quiser pausar o recebimento de dados em algum ponto utilizar o **.pause()** assim:

```
streamReadable.on('data',data=>{
    console.log(data.toString())
    streamReadable.pause()
})
```

## Continuar o push/pull quando foi pausado

Se quiser continuar o recebimento de dados após pausa-lo em algum ponto utilizar o **.resume()** assim:

```
streamReadable.on('data',data=>{
    console.log(data.toString())
    streamReadable.pause()
    streamReadable.resume()
})
```

## Observações

- O chunk siginifica "um pedaço dos dados da stream"
- O .pause(), pausa (rsrs) o envio/recebimento de dados.
- O .resume(), continua o recebimento de dados, caso ele tenha sido pausado



# Writable Streams

```
const fs = require('fs');

const streamWritable = fs.createWriteStream('teste.txt',{
    flasgs:'w',
    encoding:'utf8'
});

streamWritable.write('Escrevendo no arquivo\n')
streamWritable.end('Finalizou aqui')

```

## Módulo fs

Implementa o módulo stream do Nodejs

```
const fs = require('fs')
```

## Criação do arquivo

```
const streamWritable = fs.createWriteStream('teste.txt',{
    flags:'w',
    encoding:'utf8'
})
```
Neste momento o arquivo 'teste.txt' é criado e não possui conteudo

## Flags

 - 'w' -> sobreescrever no arquivo. 
    - Neste caso ele sobreescreve o que tinha antes, deixando apenas o conteúdo enviado atualmente
 - 'a' -> adicionar conteúdo ao arquivo.
    - Neste caso ele mantem o conteúdo antigo, adicionando o conteudo atual no final do conteúdo antigo.

## Escrevendo no arquivo

```
streamWritable.write('Escrevendo no arquivo\n')

```
Neste momento o arquivo previamente criado é aberto e o texto 'Escrevendo no arquivo\n' é inserido no mesmo.

## Finalizando o arquivo

```
streamWritable.end('Finalizou aqui')
```

Neste momento o arquivo terminou de receber dados e adiciona a frase 'Finalizou aqui'

Ao final da escrita o arquivo teste.txt será gravado com os dados anteriormente escritos no caminho especificado.


fonte: DevPleno (Javascript: Streams) 
 - (P-1: Readable Streams - https://www.youtube.com/watch?v=PcvJm2QqSS4)
 - (P-2: Writable Streams https://www.youtube.com/watch?v=9fVNChUKfZ4)

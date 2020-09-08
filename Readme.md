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
const readable = fs.createReadStream('big.txt')
```

Este trecho abre uma stream e a deixa no modo pausado

## Modo push ( lendo dados constantemente)

Significa que ele diz, olha, toma ai os dados deste stream

Este trecho pega o readable que está pausado e com o **.on('data')** começa a receber todos os dados do arquivo em parte e continuamente.

```
readable.on('data',data=>{
    console.log(data.toString())
})
```

## Modo readable (pull)

Significa que ele diz, olha, eu consigo ler dados deste stream

Ao contrŕario do push que empurra os dados pra gente,e este modo, pede os dados para o stream, ou seja, eu controlo o que recebo.
igual ao pull, sendo que em alguns lugares realmente chamam isso de fazer um pull de dados
chunk - este termo siginifica, geralmente, que possui uma parte dos dados totais. o pedaço de conteúdo lido pela stream num determinado momento. um punhado de dados.

## Pausar o push/pull

Se quiser pausar o recebimento de dados em algum ponto utilizar o **.pause()** assim:

```
readable.on('data',data=>{
    console.log(data.toString())
    readable.pause()
})
```

## Continuar o push/pull quando foi pausado

Se quiser continuar o recebimento de dados após pausa-lo em algum ponto utilizar o **.resume()** assim:

```
readable.on('data',data=>{
    console.log(data.toString())
    readable.pause()
    readable.resume()
})
```

## Observações

- O chunk siginifica "um pedaço dos dados da stream"
- O .pause(), pausa (rsrs) o envio/recebimento de dados.
- O .resume(), continua o recebimento de dados, caso ele tenha sido pausado

fonte: DevPleno (Javascript: Streams (P-1: Readable Streams - https://www.youtube.com/watch?v=PcvJm2QqSS4)

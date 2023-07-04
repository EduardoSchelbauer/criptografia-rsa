const fs = require('fs');
const TextChunk = require("C:/Users/kelvi/Downloads/text_chunk_js/habib/text_chunk");


const caminhoArquivo = 'C:/Users/kelvi/Downloads/text_chunk_js/base64/decrybase64.txt';
const texto = fs.readFileSync(caminhoArquivo, 'utf8');


const chunk = new TextChunk(texto);


console.log(chunk.toString());


const bigIntValue = chunk.bigIntValue;
console.log(bigIntValue);


const blockSize = TextChunk.blockSize(bigIntValue);
console.log(blockSize);

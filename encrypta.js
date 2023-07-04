const fs = require('fs');
const BigInteger = require('big-integer'); 


function encryptRSA(number, publicKey, modulus) {
  return number.modPow(publicKey, modulus);
}


const publicKey = BigInteger('101');
//const privateKey = BigInteger('3163076316033238841'); 
const modulus = BigInteger('15212890864824009557'); 


const inputFile = 'C:/Users/kelvi/Downloads/text_chunk_js/QubraChunk.txt';

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Erro ao ler o arquivo ${inputFile}: ${err}`);
    return;
  }

  const lines = data.split('\n'); 

  
  const encryptedLines = lines.map((line) => {
    const number = BigInteger(line); 

   
    const encryptedNumber = encryptRSA(number, publicKey, modulus);

    return encryptedNumber.toString(); 
  });

  const outputFile = 'C:/Users/kelvi/Downloads/text_chunk_js/tentativas/criptochunk.txt';

 
  fs.writeFile(outputFile, encryptedLines.join('\n'), 'utf8', (err) => {
    if (err) {
      console.error(`Erro ao escrever o arquivo ${outputFile}: ${err}`);
      return;
    }
    console.log(`Criptografia concluída! Linhas criptografadas foram salvas em ${outputFile}.`);
  });
});

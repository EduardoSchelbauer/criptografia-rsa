const fs = require('fs');
const BigInteger = require('big-integer'); 


function decryptRSA(number, privateKey, modulus) {
  return number.modPow(privateKey, modulus);
}


const privateKey = BigInteger('3163076316033238841'); 
const modulus = BigInteger('15212890864824009557'); 


const inputFile = 'C:/Users/kelvi/Downloads/text_chunk_js/tentativas/criptochunk.txt';


fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error(`Erro ao ler o arquivo ${inputFile}: ${err}`);
    return;
  }

  const encryptedLines = data.split('\n'); 

 
  const decryptedLines = encryptedLines.map((line) => {
    const encryptedNumber = BigInteger(line); 

    
    const decryptedNumber = decryptRSA(encryptedNumber, privateKey, modulus);

    return decryptedNumber.toString(); 
  });

  const outputFile = 'C:/Users/kelvi/Downloads/text_chunk_js/tentativas/decriptochunk.txt';

  
  fs.writeFile(outputFile, decryptedLines.join('\n'), 'utf8', (err) => {
    if (err) {
      console.error(`Erro ao escrever o arquivo ${outputFile}: ${err}`);
      return;
    }
    console.log(`Descriptografia concluída! Linhas descriptografadas foram salvas em ${outputFile}.`);
  });
});
 
const fs = require('fs');

function convertToBase64(inputFilePath, outputFilePath) {
  fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo:', err);
      return;
    }
    
    const base64Data = Buffer.from(data).toString('base64');
    console.log('Texto convertido para Base64:', base64Data);
    
    fs.writeFile(outputFilePath, base64Data, 'utf8', (err) => {
      if (err) {
        console.error('Erro ao salvar o arquivo:', err);
        return;
      }
      
      console.log('Arquivo salvo com sucesso:', outputFilePath);
    });
  });
}

const inputFilePath = 'C:/Users/kelvi/Downloads/text_chunk_js/habib/decryptedstring.txt';
const outputFilePath = 'C:/Users/kelvi/Downloads/text_chunk_js/base64/decrybase64.txt';

convertToBase64(inputFilePath, outputFilePath);

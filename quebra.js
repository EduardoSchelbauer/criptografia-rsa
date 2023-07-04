const fs = require('fs');

function formatTextFile(inputFilename, outputFilename) {
  try {
    const data = fs.readFileSync(inputFilename, 'utf8');
    let formattedText = '';
    let count = 0;

    for (let i = 0; i < data.length; i++) {
      formattedText += data[i];
      count++;

      if (count === 19) {
        formattedText += '\n';
        count = 0;
      }
    }

    fs.writeFileSync(outputFilename, formattedText);
    console.log(`Arquivo formatado salvo em ${outputFilename}`);
  } catch (err) {
    console.error('Erro ao ler ou salvar o arquivo:', err);
  }
}


formatTextFile('C:/Users/kelvi/Downloads/text_chunk_js/base64/nova.txt', 'C:/Users/kelvi/Downloads/text_chunk_js/borala.txt');

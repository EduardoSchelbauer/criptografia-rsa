# criptografia-rsa

Pegamos o arquivo de texto que o professor havia passado, fizemos o textoToString para converter o texto inteiro em uma string, após isso fizemos também o base64.js para converter a string para base64.

Para saber o tamanho do blocksize jogamos o módulo no text_chunk que o professor disponibilizou também. Dessa forma descobrimos que o blocksize deveria ser 19.

Fizemos o textoToBigInt.js para converter o texto base64 para números, após isso fizemos o quebra.js para separar os valores em blocos de 19.

Para finalizar, desenvolvemos o encrypta, porém sem sucesso. O encrypta iria ler linha por linha, que no caso seriam blocos de 19 separados por linha e iria criptografar cada linha por vez, e salvar o resultado em um arquivo.txt.

O programa decrypta foi desenvolvido, porém sem sucesso também. Conseguimos fazer ele realizar alguma funções, mas os valores não saem corretos.

Desenvolvendo essa atividade, acabamos ficando interessados por essa criptografia. Procuramos também e temos o devido conhecimento de que essa criptografia é uma das mais seguras do mundo, já que para quebrar sua lógica seria necessário, através de tentativas e erros, descobrir dois números primos completamente aleatório.

O cálculo para desenvolver seria mensagemasercriptografadaˆchavepublica mod n.

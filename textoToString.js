var texto = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Donec augue augue, pellentesque at mollis non, euismod ac ex.

Nulla sollicitudin congue urna, eget ullamcorper lorem convallis sit amet.

Vivamus scelerisque quis lacus sed rhoncus.

Proin commodo elit eget auctor lobortis.

Sed vulputate dui a velit molestie, vel lobortis orci tempor.

Pellentesque sagittis erat sit amet aliquam cursus. Cras sed est nulla.

Proin vitae convallis urna. Aenean mauris metus, placerat rhoncus dui ut, dapibus auctor urna.

`;


 

var textoUnificado = texto.replace(/\n/g, "").replace(/\s+/g, "");

console.log(textoUnificado);
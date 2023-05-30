const btnCopiar = document.createElement('button'); // Cria um elemento HTML 
btnCopiar.innerText = 'Copiar'; // Adiciona o conteúdo no elemento HTML
btnCopiar.classList.add('code-button');
btnCopiar.classList.add('outline');
btnCopiar.classList.add('flex-row');
btnCopiar.classList.add('btnCopiar');
btnCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(textoEncriptado.innerText);
  if(navigator.clipboard.writeText(textoEncriptado.innerText)){
    document.querySelector('.btnCopiar').textContent = 'Copiado!'
  };
  setInterval(function() {
    document.querySelector('.btnCopiar').textContent = 'Copiar'
  }, 2000);
})

const textArea = document.getElementById('text');
const divEncriptado = document.querySelector('.flex-column.criptografada');
// tentar mudar para querySelector sem precisar do id
const cripTitulo = document.getElementById('crip-titulo');
const textoEncriptado = document.getElementById('crip-text');
const btnCriptografar = document.querySelector('.wrapper-buttons > .code-button.normal');
const btnDescriptografar = document.querySelector('.wrapper-buttons > .code-button.outline');
const aluraGuyImg = document.querySelector('#alura-guy')

btnCriptografar.addEventListener('click', () => {
  const entradaUsuario = textArea.value;
  textoEncriptado.innerText = encoder(entradaUsuario);
  cripTitulo.classList.add('none') // adiciona class 'none'
  aluraGuyImg.style.display = 'none' // adiciona display 'none'

  divEncriptado.appendChild(btnCopiar);
});

btnDescriptografar.addEventListener('click', () => {
  const textoDecriptado = decoder(textoEncriptado.innerText);
  textoEncriptado.innerText = textoDecriptado;
});


function auto_grow(element) {
  element.style.height = (element.scrollHeight) + "px";
}

function encoder (texto) {
  return texto
    .replace(/e/gi, 'enter')
    .replace(/i/gi, 'imes')
    .replace(/a/gi, 'ai')
    .replace(/o/gi, 'ober')
    .replace(/u/gi, 'ufat');
}

function decoder (texto) {
  return texto
    .replace(/enter/gi, 'e')
    .replace(/imes/gi, 'i')
    .replace(/ai/gi, 'a')
    .replace(/ober/gi, 'o')
    .replace(/ufat/gi, 'u');
}
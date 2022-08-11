// function start(){
//   var buttonCalculateImc = document.querySelector('#calculate-imc');
//   buttonCalculateImc.addEventListener('click', handleButtonClick )

//   var weight1 = document.querySelector('#input-weight')
//   var height1 = document.querySelector('#input-height')

//   weight1.addEventListener('input', handleButtonClick); //calculo automático sem o uso do button
//   height1.addEventListener('input', handleButtonClick); //calculo automático sem o uso do button

//   handleButtonClick()
// }
// function handleButtonClick(){
//   var weight1 = document.querySelector('#input-weight') //colocando meus inputs html em variáveis
//   var height1 = document.querySelector('#input-height') //colocando meus inputs html em variáveis
//   var imcResult = document.querySelector('#imc-result') //colocando meus inputs html em variáveis

//   var weight = Number(weight1.value); //pegando o valor deles e transformando em número, apesar do type="number" no html e colocando em uma variável
//   var height = Number(height1.value); //pegando o valor deles e transformando em número, apesar do type="number" no html e colocando em uma variável

//   var imc = calculateImc(weight, height); //chamando a função principal, passando os parametros acima e colocando ela é uma variável
//   var formattedImc = imc.toFixed(2).replace('.', ',') //pegando a variável acima, limitando casas decimais e mudando de . para ,
//   imcResult.textContent = formattedImc; //pegando a variável acima e colocando para aparecer na tela com o .textContent imaResult é o ID do <p><strong></p>

// }
// function calculateImc(weight1, height1){ //minha função principal para o calculo
//   return weight1/(height1*height1);
// }
// start()

var weight1 = document.getElementById('input-weight');
var height1 = document.getElementById('input-height');
var calc = document.getElementById('calculate-imc');
var imcResult = document.querySelector('#imc-result');

function calculateImc(weight1, height1) {
  return weight1 / (height1 * height1);
}

calc.addEventListener('click', () => {
  imcResult.textContent = calculateImc(weight1.value, height1.value)
    .toFixed(2)
    .replace('.', ',');
});

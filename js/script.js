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
  var result = weight1 / (height1 * height1);
  return result;
}

calc.addEventListener('click', () => {
  var res = calculateImc(weight1.value, height1.value);

  if (res >= 0 && res <= 16.9) {
    classification = `Você está muito abaixo do peso.`;
  }
  if (res >= 17 && res <= 18.4) {
    classification = `Você está abaixo do peso.`;
  }
  if (res >= 18.5 && res <= 24.9) {
    classification = `Você está com o peso normal.`;
  }
  if (res >= 25 && res <= 29.9) {
    classification = `Você está acima do peso.`;
  }
  if (res >= 30 && res <= 34.9) {
    classification = `Você está com obesidade grau I.`;
  }
  if (res >= 35 && res <= 40) {
    classification = `Você está com obesidade grau II.`;
  }
  if (res > 40) {
    classification = `Você está com obesidade grau III.`;
  }

  imcResult.textContent = res.toFixed(2).replace('.', ',');
  classification1.textContent = classification;
});

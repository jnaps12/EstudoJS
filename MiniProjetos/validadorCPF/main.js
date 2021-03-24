function validaCpf(){
  let cpf = document.getElementById('inputCPF').value;
  cpf = cpf.toString();
  cpfVerificado = verificaDigitosRepetidos(cpf);
  html = '';

  if (cpf.length == 14 && cpfVerificado == true) {
    cpf = cpf.replace(/[^\d]+/g, '');
    cpfArray = cpf.split('');
    cpfInt = convertParaInteiro(cpfArray);
    primeiroDigito = verificaPrimeiroDigito(cpfInt);
    if(primeiroDigito){
      segundoDigito = verificaSegundoDigito(cpfInt);
      if (segundoDigito){
        html += "<h2>CPF VÁLIDO :D </h2>";
      }else{
        html += "<h2>CPF INVÁLIDO! </h2>";
      }
    }else{
      html += "<h2>CPF INVÁLIDO! </h2>";
    }
  
  } else if (cpfVerificado) {
    cpfArray = cpf.split('');
    cpfInt = convertParaInteiro(cpfArray);
    primeiroDigito = verificaPrimeiroDigito(cpfInt);
    if (primeiroDigito) {
      segundoDigito = verificaSegundoDigito(cpfInt);
      if (segundoDigito) {
        html += "<h2>CPF VÁLIDO :D </h2>";
      } else {
        html += "<h2>CPF INVÁLIDO! </h2>";
      }
    } else {
      html += "<h2>CPF INVÁLIDO! </h2>";
    }
  }else{
    html += "<h2>CPF INVÁLIDO! </h2>";
  }
  document.getElementById('resultado').innerHTML = html;
}

function verificaPrimeiroDigito(cpf){
  let multiplier = 0;
  let key = 0;
  for (let count = 10; count >= 2; count--) {
    multiplier += cpf[key] * count;
    key++;
  }

  resultado = (multiplier * 10) % 11;

  if (resultado == 10 || resultado == 11) {
    resultado = 0;
  }
  if (resultado == cpf[9]){
    return true;
  }else{
    return false;
  }
}

function verificaSegundoDigito(cpf){
  key = 0;
  multiplier = 0;
  for (let count = 11; count >= 2; count--) {
    multiplier += cpf[key] * count;
    key++;
  }
  resultado = (multiplier * 10) % 11;
  if (resultado == cpf[10]) {
    return true;
  } else {
    return false;
  }
}

function clean(){
  html = '';
  campoCPF = document.getElementById('inputCPF');
  campoCPF.value = '';
  document.getElementById('resultado').innerHTML = html;
}

function convertParaInteiro(cpf){
  for(let count = 0; count < cpf.length; count++){
    cpf[count] = parseInt(cpf[count]);
  }
  return cpf;
}

function verificaDigitosRepetidos(cpf){
  cpf = cpf.replace(/[^\d]+/g, '');
  cpfArray = cpf.split('');
  cpfInt = convertParaInteiro(cpfArray);
  let adder = 0;
  let verify = 0;
  for(let count = 0; count < cpfInt.length; count++){
    adder += cpfInt[count];
  }
  adder = parseInt(adder/11);
  for (let count = 0; count < cpfInt.length; count++) {
    if(adder == cpfInt[count]){
      verify++;
    }
  }
  if(verify == 11){
    return false;
  }else{
    return true;
  }
}

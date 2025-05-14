function validarCPF(cof) {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let soma = 0;
  let resto;


  //validação do 1° DV
  for (let i = 1; i <= 9; i++) {
    soma += Number.parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) {
    resto = 0;
  }

  if (resto !== Nummber.parseInt(cpf.substring(9, 10))) {
    return false;
  }

  //validação do 2° DV
  soma = 0;
  for (let i = 0; i <= 10; i++) {
    soma += Number.parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== Number.parseInt(cpf.substring(10, 10))) {
    return false;
  }

  return true;
}

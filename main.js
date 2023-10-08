function somar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (isNaN(num1) || isNaN(num2)) {
      swal.fire('Por favor, insira números válidos.');
      return; 
    }
  
    const resultado = num1 + num2;
    exibirResultado('soma', resultado);
  }
  
  function subtrair() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (isNaN(num1) || isNaN(num2)) {
      swal.fire('Por favor, insira números válidos.');
      return;
    }
  
    const resultado = num1 - num2;
    exibirResultado('subtração', resultado);
  }
  
  function multiplicar() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (isNaN(num1) || isNaN(num2)) {
      swal.fire('Por favor, insira números válidos.');
      return;
    }
  
    const resultado = num1 * num2;
    exibirResultado('multiplicação', resultado);
  }
  
  function dividir() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
  
    if (isNaN(num1) || isNaN(num2)) {
      swal.fire('Por favor, insira números válidos.'); 
      return;
    }
  
  
    const resultado = num1 / num2;
    exibirResultado('divisão', resultado);
  }
  
  function limpar() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('resultado').innerText = '';
  }
  
  function exibirResultado(operacao, resultado) {
    document.getElementById('resultado').innerText = `Resultado da: ${operacao}  ${resultado}`;
  }

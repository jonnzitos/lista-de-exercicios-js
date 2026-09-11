let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let resto = numero1 % numero2;
let potencia = numero1 ** numero2;

console.log(`
Soma: ${soma}
Subtração: ${subtracao}
Multiplicação: ${multiplicacao}
Divisão: ${divisao}
Resto: ${resto}
Potência: ${potencia}
`);
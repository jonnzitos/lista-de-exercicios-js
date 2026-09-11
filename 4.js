let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));

let iguais = numero1 === numero2;
let diferentes = numero1 !== numero2;
let maior = numero1 > numero2;
let menor = numero1 < numero2;

console.log(`
Os números são iguais: ${iguais}
Os números são diferentes: ${diferentes}
O primeiro número é maior: ${maior}
O primeiro número é menor: ${menor}
`);
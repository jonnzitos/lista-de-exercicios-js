const nome = prompt("Digite seu nome:");
let numero = Number(prompt("Digite um número:"));

let dobro = numero * 2;
let metade = numero / 2;

let confirmar = confirm("Deseja ver os resultados?");

if (confirmar) {
    alert(`
Nome: ${nome}
Número: ${numero}
Dobro: ${dobro}
Metade: ${metade}
`);
} else {
    alert("Operação cancelada.");
}
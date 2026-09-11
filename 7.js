let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let curso = prompt("Digite seu curso:");

let confirmar = confirm(`
Nome: ${nome}
Idade: ${idade}
Curso: ${curso}

Deseja confirmar os dados?
`);

if (confirmar) {
    alert("Dados confirmados com sucesso!");
} else {
    alert("Dados não confirmados.");
}
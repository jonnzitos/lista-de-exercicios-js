const nome = "João Victor";
let nota1 = 8.5;
let nota2 = 7.0;
const idade = 18;

const media = (nota1 + nota2) / 2;
const aprovado = media >= 7;
const nomeFormatado = nome.toUpperCase();

console.log(`RELATÓRIO ACADÊMICO
Nome: ${nomeFormatado}
Idade: ${idade}
Nota 1: ${nota1}
Nota 2: ${nota2}
Média: ${media}
Situação: ${aprovado ? "Aprovado" : "Reprovado"}`);
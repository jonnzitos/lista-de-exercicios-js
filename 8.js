let salario = Number(prompt("Digite seu salário:"));
let aumentop = Number(prompt("Digite o percentual de aumento:"));

let aumento = salario * aumentop / 100;
let novoSalario = salario + aumento;

alert(`
Salário atual: R$ ${salario}
Aumento: R$ ${aumento}
Novo salário: R$ ${novoSalario}
`);
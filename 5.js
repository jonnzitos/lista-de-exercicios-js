let preco = Number(prompt("Digite o preço do produto:"));
let quantidade = Number(prompt("Digite a quantidade:"));
let descontoPercentual = Number(prompt("Digite o percentual de desconto:"));

let subtotal = preco * quantidade;
let desconto = subtotal * descontoPercentual / 100;
let valorFinal = subtotal - desconto;

console.log(`
Subtotal: R$ ${subtotal}
Desconto: R$ ${desconto}
Valor final: R$ ${valorFinal}
`);
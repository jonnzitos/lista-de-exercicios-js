let distancia = Number(prompt("Digite a distância da viagem em km:"));
let consumo = Number(prompt("Digite o consumo médio do veículo em km/l:"));
let precoCombustivel = Number(prompt("Digite o preço do combustível por litro:"));

let quantidadeCombustivel = distancia / consumo;
let custoViagem = quantidadeCombustivel * precoCombustivel;

console.log(`
Quantidade estimada de combustível: ${quantidadeCombustivel.toFixed(2)} litros
Custo da viagem: R$ ${custoViagem.toFixed(2)}
`);
let produtos = [{nomeProduto: "Laranja", valorProduto: 7.5, qualidade: 9, status: true},
                {nomeProduto: "Maçã", valorProduto: 4, qualidade: 10, status: true},
                {nomeProduto: "Batata", valorProduto: 3.2, qualidade: 8, status: true},
                {nomeProduto: "Morango", valorProduto: 4.9, qualidade: 9, status: false},
                {nomeProduto: "Arroz", valorProduto: 9.9, qualidade: 7, status: true}]

let nomeValor = produtos.map(p => {
     return p.nomeProduto + " " + p.valorProduto})
let soma = produtos.reduce((acumulador, v)=> {
    return acumulador + v.valorProduto},
    0)
console.log(nomeValor, soma)
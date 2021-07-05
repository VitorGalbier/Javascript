/*Crie uma variável produtos, que contenha um array de objetos, com no
mínimo 3 itens. Dentro da variável, liste produtos disponíveis, informando os
seguintes detalhes: Nome do Produto, Valor do Produto, Qualidade do
Produto e Status.
A informação Qualidade do Produto deve ser um número que irá de 0 a 10.
A informação Status deve ser um Booleano, indicando se o produto está
disponível em estoque*/
let produtos = [{nomeProduto: "Laranja", valorProduto: 7.5, qualidade: 9, status: true},
                {nomeProduto: "Maçã", valorProduto: 4, qualidade: 10, status: true},
                {nomeProduto: "Batata", valorProduto: 3.2, qualidade: 8, status: true},
                {nomeProduto: "Morango", valorProduto: 4.9, qualidade: 9, status: false},
                {nomeProduto: "Arroz", valorProduto: 9.9, qualidade: 7, status: true}]

/*Em seguida, um usuário deseja filtrar os produtos, com base em alguns
critérios. Selecione todos os produtos que tenham:
Valor entre 482 e 1600;
Qualidade superior a 60;Status como disponível.
O resultado do filtro deve ser armazenado na variável carrinho*/

let carrinho = produtos.filter(function(produtos){
    return produtos.valorProduto >= 4.8 && produtos.valorProduto <= 16
    && produtos.qualidade > 6 && produtos.status == true
})

console.log(carrinho)

/*Por fim, é necessário exibir todos os itens presentes no carrinho, com seus
nomes e preços correspondentes, e no final um valor total, resultante da
somatória de todos os produtos.*/
let nome = produtos.map(p => {
    return p.nomeProduto + " " + p.valorProduto})
let soma = produtos.reduce((acumulador, v)=> {
   return acumulador + v.valorProduto},
   0)
console.log(nome, soma)
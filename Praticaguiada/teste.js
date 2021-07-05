let produtos = [{nomeProduto: "Laranja", valorProduto: 7.50, qualidade: 9, status: true},
                {nomeProduto: "Maçã", valorProduto: 4.0, qualidade: 10, status: true},
                {nomeProduto: "Batata", valorProduto: 3.20, qualidade: 8, status: true},
                {nomeProduto: "Morango", valorProduto: 4.70, qualidade: 9, status: false},
                {nomeProduto: "Arroz", valorProduto: 9.90, qualidade: 7, status: true}]
let compra = function(b){
    for(i=0; i<produtos.length; i++){
        if(b[i].valorProduto >= 4.8 && b[i].valorProduto <= 16 && b[i].qualidade >= 6 && b[i].status == true){
                return b[i]
            }
    }
}


console.log(compra(produtos))
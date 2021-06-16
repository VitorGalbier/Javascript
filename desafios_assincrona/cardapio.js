class Restaurante{
    constructor(nome, cardapio){
        this.nome=nome
        this.cardapio = cardapio
    }
    entrada = function(){
        return "Bem-vindo ao " + this.nome + " este é o cardápio " + this.cardapio
    }
}
const boasVindas = new Restaurante("Caseiro", ["pão", "macarrão", "chocolate"])
console.log(boasVindas.entrada())
/*Crie um array de números pares, e utilizando a função .map() nesse array,
crie um novo array com apenas números ímpares.
O map permite criar um novo array utilizando informações já existentes*/
let par = [2, 4, 6, 8]
let impar = par.map(function(n){ 
    return n + 1;// o nome como parametro da função nao importa, ele vai utilizar o elemento da array
})
console.log(impar)
let novoimpar = par.map(x => x + 1) // neste case ele está recebendo os itens da array par como parametro e retornando par+1
console.log(novoimpar)

let duplicado = par.map(z => z*2) // posso chamar o parametro e o return como eu quiser
console.log(duplicado)

/*Crie um array de nomes, que possua dois índices com o nome Maria. 
Utilize o .filter() para obter apenas esses dois índices com o nome Maria
O filter cria um novo array utilizando o original, filtrando alguns itens*/
let nomes = ["Maria", "José", "João", "Ana", "Maria", "Camila"]
let maria = nomes.filter(function(cadê){
    return cadê == "Maria"
})
console.log(maria)
let jose = nomes.filter(y => y=="José")
console.log(jose)

/*Crie um array de números e utilize a função .reduce() para devolver 
uma string com os números formatados*/
//O reduce gera um único valor através de uma array
let nums = [0, 1, 2, 3, 4, 5, 6, 7]
let total = nums.reduce((tudo, n)=>tudo + n) //o 0 representa o valor inicial, que pode variar, muito útil com objetos
console.log(total)

let str = nums.reduce(function(junto, numero){
    return junto + "-" + numero
})
console.log(str)

/*Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e 
imprima a frase “O animal é NOME_DO_ANIMAL”.*/
//forEach permite executar uma função para cada elemento do array

let animais = ["Arara", "Leão", "Lobo", "Macaco"]
let nome = animais.forEach(function(el){
    console.log("O animal é " + el) 
})


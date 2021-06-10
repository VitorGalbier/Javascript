let compras = ["macarrão", "feijão", "arroz", "cenoura"];

//O método join junta os elementos da array
console.log(compras.join(" - "))
 
//O método pop exclui o último elemento da array
let ultimoItem = compras.pop()
console.log(ultimoItem)

//O método push acrescenta um item no final da array
compras.push("Batata")
console.log(compras)

//O método shift exclui o item no início da array
let primeiroItem = compras.shift()
console.log(primeiroItem)
 
//O método unshift adiciona um item no início da array
console.log(compras.unshift("Couve"))
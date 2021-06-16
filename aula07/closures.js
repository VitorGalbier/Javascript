function saudacao (nome){
    let mensagem = "olá, seja bem vindo"
    function juntarNome (){
        return mensagem + " " + nome
    }
    return juntarNome()
}
console.log(saudacao("Vitor"))
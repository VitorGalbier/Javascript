

function estacoes(estacao) 
{
 switch (estacao)
 {
    case "Primavera":
        console.log("O momento em que as flores crescem.");
        break
    case "Outono":
        console.log("É a estação em que as folhas caem.");
        break
    case "Inverno":
        console.log("Frio demais!")
        break
    case "Verão":
        console.log("Que calor hein!?")
        break
    default:
        console.log("Opção inválida!")
        break
 }   
}

estacoes("Primavera")
estacoes("Verão")
estacoes("Inverno")
estacoes("Outono")
estacoes("bla")
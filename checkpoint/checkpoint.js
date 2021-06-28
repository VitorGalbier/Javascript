/*Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/


function microondas (tempo, opcao){
    if(tempo < opcao){
        return "tempo insuficiente"
    }
    else if(tempo >= opcao && tempo <= opcao*2){
        return "Prato pronto, bom apetite!"
    }
    else if(tempo > opcao*2 && tempo < opcao*3){
        return "Comida queimou!!"
    }
    else if(tempo >= opcao*3){
        return "Kabuuummm!"
    }
}

function Menu (tempo, opcao){
    const pipoca = 10,  macarrão = 8, carne = 15, feijao = 12, brigadeiro = 8;
    switch(opcao){
        case 1:
            return microondas(tempo, pipoca)
            break;
        case 2:
            return microondas(tempo, macarrão)
            break;
        case 3:
            return microondas(tempo, carne)
            break;
        case 4:
            return microondas(tempo, feijao)
            break;
        case 5:
            return microondas(tempo, brigadeiro)
            break;
        default:
            return "Prato inexistente"
    }
}

console.log(Menu(10, 1));
console.log(Menu(8, 2));
console.log(Menu(15, 3));
console.log(Menu(12, 4));
console.log(Menu(8, 5));



function aquecer(comida, tempo) {
    const pratos = ["Pipoca", "Macarrão", "Carne", "Feijão", "Brigadeiro"]
    const tempos = [10, 8, 15, 12, 8]
        for (let i = 0; i < pratos.length; i++) {
            if (pratos[i] == comida) {
                if (tempo >= tempos[i] && tempo <= (tempos[i] * 2)) { 
                    return "Prato pronto, bom apetite!!!"
                }
                else if (tempo > tempos[i]*2 && tempo < (tempos[i] * 3)) { 
                    return "Prato queimou!!!"
                }
                else if (tempo >= tempos[i] * 3) { 
                    return "Kabuuuuuumm"
                }
                else if (tempo < tempos[i]) { 
                    return "Tempo insuficiente"
                }
            }
        }
        return "Prato inexistente"
    }
console.log(aquecer("Pipoca", 10))
console.log(aquecer("Macarrão", 8))
console.log(aquecer("Carne", 15))
console.log(aquecer("Feijão", 12))
console.log(aquecer("Brigadeiro", 8))


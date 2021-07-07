/*Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1)*/
let aluno = require("./aluno") 
class curso {
    constructor(nome, notaAprov, faltaMax, estudantes) {
        this.nome = nome;
        this.notaAprov = notaAprov;
        this.faltaMax = faltaMax;
        this.estudantes = estudantes;
        this.adicionar = alunos => {
            this.estudantes.push(...alunos)}
            /*for(let i = 0; i < alunos.length; i++){
                estudantes.push(alunos)
                return this.estudantes};*/
        this.aprovar = function aprovar(aluno){
            if(aluno.calcMedia ()>= this.notaAprov && aluno.qtdFaltas < this.faltaMax){
                return "Aprovado!!"
            }
            else if(aluno.calcMedia () >= this.notaAprov * 1.1 && aluno.qtdFaltas == this.faltaMax){
                return "Aprovado!!"
            }
            else if(aluno.calcMedia () < this.notaAprov || aluno.qtdFaltas > this.faltaMax){
                return "Reprovado!!"
            }
        }
    }
}

module.exports = curso
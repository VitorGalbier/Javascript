let aluno = require("./modulos/aluno.js") 
let curso = require("./modulos/curso")
let joao = new aluno("João",2, [10, 10, 6, 4])
let mario = new aluno("Mario", 1, [10, 8]);
let maria = new aluno("Maria", 5, [10, 10]);

console.log(joao.calcMedia())
let informatica = new curso("Informática", 7, 4, [joao]);
console.log(informatica.aprovar(mario))
/*
console.log(joao)

console.log(informatica.aprovar(mario));
console.log(informatica.aprovar(joao));
console.log(informatica.aprovar(maria));


/*Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.*/

/*Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.*/

/*Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).*/


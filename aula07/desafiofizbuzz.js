
let fizzbuzz = (n1, n2) => {
    let contador = 0
    while(contador < 100){
        contador++
        if (contador%n1 == 0 && contador%n2 != 0){
            console.log(contador + "Fizz")
        }
        if (contador%n1 != 0 && contador%n2 == 0){
            console.log(contador + "Buzz")
        }
        if (contador%n1 == 0 && contador%n2 == 0){
            console.log(contador + "Fizbuzz")
        }
    }
    }

fizzbuzz(2, 3)
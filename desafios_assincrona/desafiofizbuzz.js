
let fizzbuzz = (n1, n2) => {
    for(contador = 0; contador < 100; contador++){
        if (contador%n1 == 0 && contador%n2 != 0){
            console.log(contador + "Fizz")
        }
        else if (contador%n1 != 0 && contador%n2 == 0){
            console.log(contador + "Buzz")
        }
        else if (contador%n1 == 0 && contador%n2 == 0){
            console.log(contador + "Fizbuzz")
        }
    }
}

fizzbuzz(2, 3)
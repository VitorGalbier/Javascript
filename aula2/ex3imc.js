function calcularIndiceDeMassaCorporal(peso, altura)
{
    metros = altura/100;
    return (peso/(metros*metros)).toFixed(2);
}

console.log(calcularIndiceDeMassaCorporal(70, 168));
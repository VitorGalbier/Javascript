let frutas = ["maçã", "banana", "laranja", "kiwi", "morango"]
for (i = 0; i < 5; i++){
    console.log(frutas[i])
    if (i==4){
        frutas[4] = "Manga"
        console.log(frutas[4])
    }
}
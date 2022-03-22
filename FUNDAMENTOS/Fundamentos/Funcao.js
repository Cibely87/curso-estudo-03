//FUNÇÃO SEM RETORNO
function imprimirSoma(a, b) {                                                     //a,b sao variaveis
    console.log(a + b)
}
imprimirSoma(2, 3)


//FUNÇÃO COM RETORNO
function soma(a, b = 0) {
    return a + b
}
console.log(soma(2, 3));
console.log(soma(2))


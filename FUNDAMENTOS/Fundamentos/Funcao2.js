//ARMAZENANDO UMA FUNÇÃO EM UMA VARIAVEL
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)

//ARMAZENAMENTO UMA FUNÇÃO EM ARROW EM UMA VARIAVEL              // => substitui a funçao function
const soma = (a, b) => {
    return a + b
}
console.log(soma(2, 3))

//ARMAZENAMENTO COM RETORNO IMPLICITO
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))
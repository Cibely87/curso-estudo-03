const notas = [9.8, 6.4, 7.0, 4.2, 8.3, 5.7, 7.6]

//SemCallback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//ComCallBack
const notasBaixas2 = notas.filter(function (notas) {
    return notas < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)
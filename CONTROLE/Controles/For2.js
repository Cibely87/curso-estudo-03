const notas = [6.7, 7, 9.8, 8.1]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoas = {
    nome: 'Cibely',
    sobrenome: 'Pereira',
    signo: 'Sagitario'
}

for (let atributo in pessoas) {
    console.log(`${atributo} = ${pessoas[atributo]}`)
}

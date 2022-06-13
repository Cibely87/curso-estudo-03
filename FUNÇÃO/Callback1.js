const Fabricantes = ["Honda", "Volkswagen", "Chevrolet"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

Fabricantes.forEach(imprimir)
Fabricantes.forEach(function (a) {
    console.log(a)
})
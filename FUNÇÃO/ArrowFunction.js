//PRIMEIRA MANEIRA DE ESCREVER
let dobro = function (z) {
    return 2 * z
}

//SEGUNDA MANEIRA DE ESCREVER
dobro = (z) => {
    return 2 * z
}

//TERCEIRA MANEIRA DE ESCREVER (RETURN ESTA IMPLICITO)
dobro = z => 2 * z

let Hello = function () {
    return 'Hello Cibely'
}

Hello = () => {
    return 'Hello Cibely'
}

Hello = () => 'Hello Cibely'
console.log(Hello())
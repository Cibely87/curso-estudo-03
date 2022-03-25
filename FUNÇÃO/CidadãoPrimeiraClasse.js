//criar de forma literal
function fun1() { }

//criar em uma variavel
const fun2 = function () { }

//armazenando dentro de um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))   //PRA FAZER RODAR

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'OPA!' }
console.log(obj.falar())    //RODAR 

//Passar função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('Executando...') })         //RODAR

//Funçao pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)
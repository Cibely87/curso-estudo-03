//DESCTRUCTION EM OBJETO
const pessoa = {
    Nome: 'Cibely',
    Idade: '34',
    Signo: 'Sagitario',
    Cor: 'Branca',
    Status: 'Namorando'
}

//FORMA 1
const { Signo, Status } = pessoa
console.log(Signo, Status)

//FORMA2
const { Signo: S, Status: t } = pessoa
console.log(S, t)

// DESTRUCTION NO ARRAY

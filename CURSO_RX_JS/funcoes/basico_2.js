
function bomDia() {
    console.log("Bom dia!!!!!!")
}

const boaTarde = function (){
    console.log("Boa tarde!!!!!!")
}


//PASSAR UMA FUNÇÃO COMO PARAMETRO PARA OUTRA FUNÇÃO
function executarQualquerCoisa(fn) {
    if(typeof fn === 'function'){
        fn()
    }
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(boaTarde)


//RETORNAR UMA FUNÇÃO A PARTIR DE OUTRA FUNÇÃO

function potencia(base) {
    return function(exp) {
        return Math.pow(base, exp)
    }
}

const potenciaDe2 = potencia(2)
console.log(potenciaDe2(8))

const pot34 = potencia (3)(4)
console.log(potencia(3)(4))


/*const nomeCompleto = "Pedro Henrique Gonçalves"
console.log("O meu nome completo é ", nomeCompleto)*/

let numeroA = 2
let numeroB = 3
let resultado = numeroA + numeroB

console.log(resultado)



function saudacao () {
    console.log("Oi, eu sou Goku!")
}
saudacao()


function multiplica (a,b) {
    return a * b
}

console.log(multiplica(2,4))


function podeDirigir(idade) {
    let idadeMinima =  18;
    if (idade < idadeMinima) {
        console.log("Você não pode dirigir")
    } else {
        console.log("Parabéns, você pode dirigir!")
    }

}
podeDirigir(16)





function converteEmHoras (minutos) {
    return minutos / 60
}

console.log(converteEmHoras(240))


for (let i = 0; i <= 20; i++){
    console.log(`i =  ${i}`)
}

function apenasImpares () {
    for (let i = 0; i <= 20; i++) {
        if (i % 2 !== 0  ) {
            console.log('Aqui temos apenas os números impares ' + i)
        }
    }
}
apenasImpares()




// FUNÇÃO TABUADA


function tabuada (n) {
    for (let i = 0; i<= 10; i++) {
        const res = n * i;
        console.log('O número que você digitou é '+ n ,'e a sua tabuada é ' + res)
    }
    
}
tabuada(2)
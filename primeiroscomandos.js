

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


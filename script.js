const prompt = require("prompt-sync")()
const arrayFrutas = []

for (let i=0; i<3; i++) {
    arrayFrutas.push(prompt("Digite o nome da fruta: "))
}

arrayFrutas.push(prompt("Digite o nome de uma fruta adicional: "))

arrayFrutas.shift()

console.log(arrayFrutas)
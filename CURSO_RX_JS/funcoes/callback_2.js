const fs = require("fs")
const path = require("path")

const caminho = path.join (__dirname, "dados.txt")

console.log(__dirname)

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

console.log("Inicio...")
fs.readFile(caminho, exibirConteudo)
fs.readFile(caminho, (_, conteudo)=> console.log(conteudo.toString()))
console.log("Fim...")

const conteudo = fs.readFileSync(caminho) //Assincrona executa na sequencia
console.log(conteudo.toString())
console.log("Fim Sync...")
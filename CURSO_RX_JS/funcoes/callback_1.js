
function exec(fn, a, b){
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)
const subtrairNoTerminal = (w, z) => console.log(w - z)
const subtrair = (w, z) => w - z

exec(somarNoTerminal, 56, 38)
exec(subtrairNoTerminal, 182, 27)

exec(subtrair, 50, 25)

const r = exec(subtrair, 50,25)
console.log(r)


//exec 1
const cb = () => console.log("Exec 1...")
setInterval(cb, 1000) //ctrl + alt + M para a execução

//exec 2
setInterval(() => console.log("Exec 2..."), 1000) //ctrl + alt + M para a execução

//exec 3
setInterval (function () {
    console.log("Exec 3...")
}, 1000) //ctrl + alt + M para a execução
// Function declaration

//1.FUNÇÃO
function sayHello() {
    console.log("Hello!")
}

//CHAMAR FUNÇÃO
let x = sayHello()

//2.FUNÇÃO
function sayHelloTo(name) {
    console.log("Hello  ${name}!")
}

sayHelloTo("Mike")
return "Hi!"

function returnHi() {
    return"Hi!"
}

const greeting = returnHi()
console.log(greeting)
console.log(returnHi())

//3.FUNÇÃO
function returnHiTo(name) {
    return 'Hi ${name}!'
}

console.log(returnHiTo("John"))
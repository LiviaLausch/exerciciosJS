// Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World")

//Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
function soma(){
    let a = 2
    let b = 6
    let total = a + b
    return alert(total)
}

soma()


//Crie um script que declare uma variável e verifique se o seu valor é um número. 
//Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let isNumber = "as"

function verificationNumber(isNumber) {
    if(typeof isNumber === 'number'){
        alert("É um número")
    } else alert("Não é um número")
}

verificationNumber(isNumber)

//Crie um script que declare uma variável e verifique se o seu valor é uma string. 
//Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
let isString= 1

function verificationString(isString) {
    if(typeof isString === 'string'){
        alert("É uma string")
    } else alert("Não é uma string")
}

verificationString(isString)

//Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
//Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
let isBoolean = true

function verificationBoolean(isBoolean) {
    if(typeof isBoolean === 'boolean'){
        alert("É um booleano")
    } else alert("Não é um booleano")
}

verificationBoolean(isBoolean)

//Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
function sub(){
    let a = 5
    let b = 3
    let total = a - b
    return alert(total)
}

sub()

//Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
function mult(){
    let a = 2
    let b = 6
    let total = a * b
    return alert(total)
}

mult()

//Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
function div(){
    let a = 2
    let b = 6
    let total = a / b
    return alert(total)
}

div()

//Crie um script que declare uma variável e verifique se o seu valor é um número par. 
//Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
let isEven = 3
let resultado = isEven 

function verificationEven(resultado) {
    if(resultado % 2 === 0) {
        alert("É um número par")
    } else alert("Não é um número par")
}

verificationEven(resultado)

//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
//Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
let isOdd = 2
let result = isOdd

function verificationOdd(result) {
    if(result % 2 === 1) {
        alert("É um número ímpar")
    } else alert("Não é um número ímpar")
}

verificationOdd(result)
// Hello World!
// Ao usar o ".", significa que está acessando algo dentro da variável
console.log("Hello World!");

// let varia, pode ser mudado
let mensagemlet = "Hello World!"
console.log(mensagemlet)

// const nao varia, se tentar colocar outra variável, não funcionará
const mensagemconst = "Hello World!"
console.log(mensagemconst)

//objetos - todos tem uma propriedade e valor
let meta = {
    value: "ler um livro todo mês",
    address: 3,
    checked: true
    //uso do dado booleano (true or false)
}

// arrays - usado pra listas e dados, usa os colchetes []
let metas = [
    meta,
    {
        value: "fazer exercícios diários",
        checked: false
    }
]

console.log(metas[0].value + ", " + metas[1].value),
console.log(metas[0].checked + ", " + metas[1].checked),
console.log(meta.value),
console.log(meta.checked),
// function - fora de um objeto, enquanto o método é usado dentro de um objeto (como mostrado acima)
// arrow function - atribui a uma constante, usa o =>
//const criarMeta = () => {} - Exemplo de arrow function
function criarMeta() {}
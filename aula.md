## A linguagem de programação
    Usada para criar algoritmos, ou seja, resolver problemas

## Algoritmos
    Sequência de passos lógica e finita para a resolução de um problema

## Partes de uma linguagem
    Comentários (Uso de //)
    Declaração de variáveis
        const, let
    Operadores
        atribuição, concatenação, matemáticos e lógicos
    Tipos de dados
        strings, number, boolean
    Estrutura de dados
        functions, object, array
    Controle de fluxo
        if, else, elseif
    Estrutura de repetição
        for, while

## Resolução de problema
    Coleta dos dados
    Processamento dos dados
        manipulação, alteração
    Apresentação dos dados

## Tipos de dados
    Strings
        Textos
            Usa "", '', ``
    Number
        Numeros
            1, 1.1, 1.2...

## Escopos e variáveis
    let
        pode ser mudada mesmo depois de definida
    const
        não pode ser mudada
    escopo
        uso da {}, separa em um "grupo" tudo escrito fora das chaves é considerado global, enquanto o que é escrito dentro das chaves se torna local. caso a apresentação de dados seja escrita fora das chaves, aparecerá apenas a variável escrita fora da chave.

## Operadores
    Operadores de atribuição de valor
        Operador usado: =
    Operador de concatenação
        Operador usado: +, é a junção de duas ou mais strings
    Operadores de comparação
        Operador usado: ==, !=, >, <. 
    Spread operator
        Operador usado: ...

## Estrutura de dados
    Arrays
        Uma lista que pode conter qualquer tipo de dado; Toda função dentro de um objeto; Um array é um objeto
        Metodos de Array: Push, [(Find, forEach, Filter, Map): HOF (Higher Order Functions), toda HOF irá sempre receber uma função] Map irá devolver um array, mas modificado
    Objetos
        Uma variável com propriedade e valor
        No JavaScript, tudo pode ser um objeto

## Estrutura de repetição
    While
        Pode ser parado por um "return"

## Condicionais
    Switch
    If/Else

## Módulos em Node.js
    Importação de módulos (require, commonJS)
    Biblioteca "Inquirer" para criar prompts interativos

## Programação assíncrona e Promises:
    Uso de funções assíncronas (async/await)

Ao usar o " ` ", pode-se colocar objetos em mensagens, por exemplo:
message: `Metas realizadas: ${realizadas.length} / ${metas.length} (${porcRealizadas.toFixed(2)}%)` => Certo
message: "Metas realizadas: ${realizadas.length} / ${metas.length} (${porcRealizadas.toFixed(2)}%)" => Dá erro!
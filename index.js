const{select, input, checkbox} = require('@inquirer/prompts')

let = meta = {
    value: "Tomar água todo dia",
    checked: false,
}
let metas = [meta]
const cadastrarMeta = async () => {
    const meta = await input({ message: "Digite a meta:"})
    if(meta.length == 0) {
        console.log("A meta não pode ficar vazia")
        return
    }
    
    metas.push(
        {value: meta, checked: false})

}

const listarMeta = async () => {
    const respostas = await checkbox({
        message: "Use as setas para mudar de meta, o espaço para marcar/desmarcar e o Enter para finalizar a etapa.",
        choices: [...metas]
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta foi selecionada.")
        return
    }

    metas.forEach((m) => {
        m.checked = false
    })

    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true 
    })

    console.log("Metas concluídas")

}
const start = async () => {

    while(true){
        const opcao = await select({
            message: "Menu>",
            choices: [
                {
                    name: "Cadastrar meta",
                    value: "cadastrar"
                },
                
                {
                    name: "Listar meta",
                    value: "listar"
                },
                
                {
                    name: "Sair",
                    value: "sair"
                }
            ]
        })

        switch(opcao){
            case "cadastrar":
                await cadastrarMeta()
                console.log(metas)
                break
            case "listar":
                await listarMeta()
                break
            case "sair":
                return
        }
    }
}
start()

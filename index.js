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
        choices: [...metas],
        instructions: false
    })
    
    metas.forEach((m) => {
        m.checked = false
    })

    if(respostas.length == 0){
        console.log("Nenhuma meta foi selecionada.")
        return
    }
 
    respostas.forEach((resposta) => {
        const meta = metas.find((m) => {
            return m.value == resposta
        })

        meta.checked = true 
    })

    console.log("Metas concluídas")

}

const metasRealizadas = async () => {
    const realizadas = metas.filter((meta) => {
        return meta.checked
    })

    if(realizadas.length == 0) {
        console.log("Não existem metas realizadas :(")
        return
    }

    const porcRealizadas = (realizadas.length / metas.length) * 100;

    await select({
        message: `Metas realizadas: ${realizadas.length} / ${metas.length} (${porcRealizadas.toFixed(2)}%)`,
        choices: [...realizadas]
    })
}

const metasAbertas = async () => {
    const abertas = metas.filter((meta) => {
        return (meta.checked == false)
    })

    if(abertas.length == 0) {
        console.log("Não existem metas abertas!")
        return
    }

    await select({
        message: `Metas abertas: ${abertas.length}`,
        choices: [...abertas]
    })
}

const deletarMeta = async () => {
    const metasDesmarcadas = metas.map((meta) => {
        return {value: meta.value, checked: false}
    })

    const aDeletar = await checkbox({
        message: "Selecione um item para deletar",
        choices: [...metasDesmarcadas],
        instructions: false
    })

    if(aDeletar.length == 0){
        console.log("Nenhum item foi deletado")
        return
    }

    aDeletar.forEach((item) => {
        metas = metas.filter((meta) => {
            return meta.value != item
        })
    })
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
                    name: "Metas Realizadas",
                    value: "realizadas"
                },
                
                
                {
                    name: "Metas Abertas",
                    value: "abertas"
                },

                {
                    name: "Deletar meta",
                    value: "deletar"
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
            case "realizadas":
                await metasRealizadas()
                break
            case "abertas":
                await metasAbertas()
                break
            case "deletar":
                await deletarMeta()
                break
            case "sair":
                console.log("Até a próxima!")
                return
        }
    }
}

start()

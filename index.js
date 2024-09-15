function start() {
    let count = 0
    while(count < 10){
        let opcao = "listar"
        switch(opcao){
            case "cadastrar":
                console.log("Vamos cadastrar")
                break
            case "listar":
                console.log("Vamos listar")
                break
            case "sair":
                return
        }
    }
}
start()

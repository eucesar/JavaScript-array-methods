/*array vazia*/
let livros = []
/*adiciono o arquivo JSON por URL*/
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
/*quero bsucar o arquivo*/
getBuscarLivrosDaAPI()

/*quero q seja assincrona - vai usar await - separar lista, e oq vou precisar - espere por uma resposta*/
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI)
    /*arquivo q eu qeuro dentro da JSON*/
    livros = await res.json()
    /*eu vou criar tds os livros q tem desconto, vou add no MAP.js*/
    livros = aplicarDesconto(livros)
    /*exibir no console*/
    exibirOsLivrosNaTela(livrosComDesconto)
}

/**/
/*passo uma fucntion da funcution q eu cirei no main.js*/
function aplicarDesconto(livros) {
    /*crio uma const do valor q eu quero de desconto*/
    const desconto = 0.3
    /*crio um .map = desconto especifico*/
    livrosComDesconto = livros.map(livro => {
        /*pegar tds os livros = return - vai retornar o valor fzndo um calculo*/
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}

/**/
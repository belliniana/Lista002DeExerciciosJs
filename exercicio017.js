const somaCarrinho = precos =>
    precos.reduce((acc, p) => acc + p, 0);
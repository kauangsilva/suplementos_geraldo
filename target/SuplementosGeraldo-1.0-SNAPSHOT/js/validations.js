let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); 
    atualizarCarrinho();

    // Enviar o produto para o servidor
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "/SuplementosGeraldo/AdicionarProdutoServlet", true);  
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log("Produto adicionado com sucesso no banco de dados!");
        }
    };
   
    xhr.send(JSON.stringify({ nome: nome, preco: preco }));
}

function atualizarCarrinho() {
    const carrinhoCount = document.getElementById('carrinho-count');
    carrinhoCount.innerText = carrinho.length;
}

window.onload = atualizarCarrinho;

$(document).ready(function() {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []

    const listaElement = $("#lsta")

    const totalElent = $("#total")

    function exibirCarrinho(){
        listaElement.empty()
        let totalPreco = 0

        $.each(carrinho, function(index, item){
            const listItem
        })
    }


})
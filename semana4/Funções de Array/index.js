// BOX 1
let valor = document.getElementById("valor")
let tipo = document.getElementById("op-select")
let descricao = document.getElementById("descricao")

// BOX 2

let tipo2 = document.getElementById("op-select2")
let valormin = document.getElementById("valorMin")
let valormax = document.getElementById("valorMax")

let listaDeDespesas = []
let arrayDespesasFiltradas = []
let valorTotalDespesas = 0

class cadastroDespesa {
    constructor(valor, tipo, descricao)
    {
        this.valor = valor;
        this.tipo = tipo;
        this.descricao = descricao
    }

}

function cadastrar(){
    if(valor.value === "" || tipo.value === "" || descricao.value === "")
    {
        alert("Preencha TODAS as lacunas!")
    }
    else
    {
        let novaDespesa = new cadastroDespesa (valor.value, tipo.value, descricao.value)
        listaDeDespesas.push(novaDespesa)

        console.log(listaDeDespesas)

        valor.value = ""
        tipo.value = ""
        descricao.value = ""
    }
}

function filtrarDespesas(){
    if(tipo2.value === "" || valormin.value === "" || valormax.value === "")
    {
        alert("Preencha TODAS as lacunas!")
    }
    else
    {
        arrayDespesasFiltradas = listaDeDespesas.filter(
            (despesa, index, array) =>
            {
                return  despesa.tipo === tipo2.value && despesa.valor >= valormin.value && despesa.valor <= valormax.value
            }
        )        
    }
}

function adicionarDespesaNaTela(){
    const divDespesas = document.getElementById("listaDespesas")

    arrayDespesasFiltradas.forEach(
        (elemento, index, array) =>
        {   
            if(divDespesas === elemento.tipo && divDespesas === elemento.valor && divDespesas === elemento.descricao){
                alert("Lista ja adicionada") // não funciona
            }else
            {
                divDespesas.innerHTML += "<li>Tipo: " + elemento.tipo + "</li>"
                divDespesas.innerHTML += "<li>Valor: R$" + elemento.valor + "</li>"
                divDespesas.innerHTML += "<li>Descrição: " + elemento.descricao + "</li><br>"
            }
        }
    )
}



function calculaTotal(){
    const spanTotal = document.getElementById("valor-total")
    arrayDespesasFiltradas.forEach(
        (elemento, index, array) =>
        {
            valorTotalDespesas += Number(elemento.valor)
            spanTotal.innerHTML = valorTotalDespesas
        }
    )

}

function limparFiltros(){
    tipo2.value = ""
    valormin.value = ""
    valormax.value = ""
}


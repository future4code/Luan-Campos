class postBlog {
    constructor(titulo, autor, conteudo)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
    }
}

function geraPost() {
    if (titulo.value === "" || autor.value === "" || conteudo.value === "")
    {
        alert("Preencha as lacunas!!")
    }
    else 
    {
        let titulo = document.getElementById("titulo")
        let autor = document.getElementById("autor")
        let conteudo = document.getElementById("conteudo")

        let novoPost = new postBlog (titulo.value, autor.value, conteudo.value)
        let arrayPost = [novoPost.titulo, novoPost.autor, novoPost.conteudo]

        titulo.value = ""
        autor.value = ""
        conteudo.value= ""

        const divPost = document.getElementById("conteudo-form")

        for (let x in arrayPost)
        {
            divPost.innerHTML += "<p>" + arrayPost[x] + "</p>"
        }
    }
}
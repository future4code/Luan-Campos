class postBlog {
    constructor(titulo, autor, conteudo, img)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
        this.img = img;
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
        let img = document.getElementById("imagem-post")

        let novoPost = new postBlog (titulo.value, autor.value, conteudo.value, img.value)
        let arrayPost = [novoPost.titulo, novoPost.autor, novoPost.conteudo, novoPost.img]

        if (arrayPost[arrayPost.length - 1] === undefined)
        {
            arrayPost.pop()
        }

        const divPost = document.getElementById("conteudo-form")

        divPost.innerHTML += "<p>" + arrayPost[0] + "</p>"
        divPost.innerHTML += "<p>" + arrayPost[1] + "</p>"
        divPost.innerHTML += "<p>" + arrayPost[2] + "</p>"


        if (arrayPost[arrayPost.length - 1] !== undefined)
        {
            divPost.innerHTML += "<img src='" + arrayPost[3] + "'>"
        }

        titulo.value = ""
        autor.value = ""
        conteudo.value = ""
        img.value = ""

        document.getElementById("conteudo-form").style.visibility = "visible";

    }  
}
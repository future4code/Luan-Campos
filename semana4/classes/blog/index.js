class postBlog {
    constructor(titulo, autor, conteudo)
    {
        this.titulo = titulo;
        this.autor = autor;
        this.conteudo = conteudo;
    }
}

function onClickButton() {
    let titulo = document.getElementById("titulo")
    let autor = document.getElementById("autor")
    let conteudo = document.getElementById("conteudo")

    let novoPost = new postBlog (titulo.value, autor.value, conteudo.value)
    let arrayPost = [novoPost.titulo, novoPost.autor, novoPost.conteudo]

    for (let x in arrayPost)
    {
        console.log(arrayPost[x])
    }

    titulo.value = ""
    autor.value = ""
    conteudo.value= ""

}
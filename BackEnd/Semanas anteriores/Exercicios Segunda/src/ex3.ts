type post = {
    author: string,
    post: string
}

const posts: post[] = [
    {author: "Luan", post: "Salve rapaziada"},
    {author: "Lucas", post: "Bom dia"},
    {author: "Luan", post: "Tudo tranquilo?"},
    {author: "Giovanna", post: "CSS é melhor que javascript"},
    {author: "Giovanna", post: "Brincadeirinha ehehehehheheh"}
]
 
function test(array: post[], author: string): void{
    let posts = array.filter(post => {
        return post.author === author
    })

    console.log(posts)
}

test(posts, "Luan")
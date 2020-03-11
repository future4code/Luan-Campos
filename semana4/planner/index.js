let segundaFeira = document.getElementById("segunda")
let tercaFeira = document.getElementById("terca")
let quartaFeira = document.getElementById("quarta")
let quintaFeira = document.getElementById("quinta")
let sextaFeira = document.getElementById("sexta")
let sabado = document.getElementById("sabado")
let domingo = document.getElementById("domingo")

const listaDias = document.getElementById("listaDiasSemana")

function adicionaTarefa() {
    let input = document.getElementById("tarefa").value
    if(input === ""){
        alert("Insira uma tarefa!")
    }
    else{
        switch(listaDias.value){
            case "1":           
                segundaFeira.innerHTML += "<li>" + input + "</li>"
                document.getElementById("tarefa").value = ""
                break;

            case "2":            
                tercaFeira.innerHTML += "<li>" + input + "</li>"
                document.getElementById("tarefa").value = ""
                break;

            case "3":            
                quartaFeira.innerHTML += "<li>" + input + "</li>"
                document.getElementById("tarefa").value = ""
                break;

            case "4":            
                quintaFeira.innerHTML += "<li>" + input + "</li>"
                document.getElementById("tarefa").value = ""
                break;  
                
            case "5":           
                sextaFeira.innerHTML += "<li>" + input + "</li>"
                document.getElementById("tarefa").value = ""
                break;

            case "6":           
                sabado.innerHTML += "<li>" + input + "</li>"
                document.getElementById("tarefa").value = ""
                break; 
                
            case "7":           
                domingo.innerHTML += "<li>" + input + "</li>"
                document.getElementById("tarefa").value = ""
                break;
        }
    }
}
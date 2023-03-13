var modal = document.getElementById("myModal") // Obtém o modal
var btn = document.getElementById("myBtn") // Obtém o botão que abre o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function (){
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (X), fecha o modal
span.onclick = function (){
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
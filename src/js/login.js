let form = document.getElementById("form");

form.addEventListener('submit', function(e){
    let senha = document.getElementById("password");
    let email = document.getElementById("email");

    fetch(`http://localhost:3000/usuarios?email=${email.value}&senha=${senha.value}`)
    .then(response => response.json())
    .then(data => 
    {
        if(data.lentgh >= 1) {
            alert("logado")
            window.location.href = "listaPacientes.html";
        } else {
            alert("email ou senha errado")
        }
    }
    )
    e.preventDefault();
})
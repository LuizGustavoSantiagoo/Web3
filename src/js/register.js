let form = document.getElementById('formulario');


form.addEventListener('submit', function(e) {
    let senha = document.getElementById('password');
    let cSenha = document.getElementById('confirm-password');
    let email = document.getElementById('email');
    const update = {email: email.value, senha: senha.value};
    const options = { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(update), };

    if(senha.value === cSenha.value) {

        fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(data => {
            if(data.length >= 1){
                alert("email ja cadastrado")
            } else {
                fetch('http://localhost:3000/usuarios', options)
                .then(data=>{
                    if(!data.ok) {
                        throw Error(data.status);
                    }
                    return data.json();
              })
              .then(update => {console.log(update);
                window.location.href = "index.html"; 
              })
            }
        })
    }
    else {
        console.error("AS SENHAS NÃO COINCIDEM");
    }
    e.preventDefault();
});

/*fetch('http://localhost:3000/usuarios', options)
        .then(data=>{
            if(!data.ok) {
                throw Error(data.status);
            }
            return data.json();
      }).then(update => {console.log(update);})

        window.location.href = "index.html"; 
        */

        fetch('http://localhost:3000/usuarios')
        .then(response => response.json())
        .then(data => console.log(data.length))
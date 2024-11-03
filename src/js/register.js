let form = document.getElementById('formulario');
let senha = document.getElementById('password');
let cSenha = document.getElementById('confirm-password');
let email = document.getElementById('email');


form.addEventListener('submit', function(e) {
    const update = {email: email.value, senha: senha.value};
    const options = { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(update), };

    if(senha.value === cSenha.value) {

        fetch('http://localhost:3000/usuarios', options)
        .then(data=>{
            if(!data.ok) {
                throw Error(data.status);
            }
            return data.json();
      }).then(update => {console.log(update);})

        window.location.href = "index.html"; 
  
    }
    else {
        console.error("AS SENHAS NÃO COINCIDEM");
    }
    e.preventDefault();
});
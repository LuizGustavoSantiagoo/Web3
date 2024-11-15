let form = document.getElementById('formulario');


form.addEventListener('submit', function(e) {
    let email = document.getElementById('email');
    let senha = document.getElementById('password');
    let cSenha = document.getElementById('confirm-password');
    const update = {email: email.value, senha: senha.value};
    const options = { method: 'POST', headers: { 'Content-Type': 'application/json', }, body: JSON.stringify(update), };

        if(senha.value === cSenha.value) {

            fetch(`http://localhost:3000/usuarios?email=${email.value}`)
            .then(response => response.json())
            .then(data => {
                if(data.length >= 1){
                    alert("email ja cadastrado")
                } else {
                    fetch('http://localhost:3000/usuarios', options)
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

       /* let email1 = 'luizsntiago280@gmail.com';

        fetch(`http://localhost:3000/usuarios?email=${email1}`)
        .then(response => response.json())
        .then(data => console.log(data)
        )*/
        

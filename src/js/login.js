let senha = document.getElementById("password")
let email = document.getElementById("email")


async function gatData() {
    const update = {email: email.value, senha: senha.value};
    const options = { method: 'GET'};
    const url = 'http://localhost:3000/usuarios';

    try {
        const response = await fetch(url, options)
        .then(response => response.json())
        .then(response => 
            response.map((usuarios) => {
                if(email === response.email && senha === response.senha) {
                    console.log("!!!!!!!!!")
                }
            })
        )
    } catch (error) {
    console.error(error.message);
    }
}


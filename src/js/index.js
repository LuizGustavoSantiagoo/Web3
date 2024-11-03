const axios = require('axios');
const url = "http://localhost:3000/usuarios";

async function getResponse() {
    let response = await axios.get(url+'?nome=Luiz Gustavo')
    console.log(response.data);
}

getResponse();
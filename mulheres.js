const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333;

const mulheres = [
    {
        nome: 'Camila Zancanella',
        imagem: 'https://static.wikia.nocookie.net/studio-ghibli/images/f/ff/Kiki%27s_Delivery_Service_English.jpg/revision/latest?cb=20220413205802',
        minibio: 'Kiki Delivery Service'
    },
    {
        nome: 'Ravióli',
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Ravioli_di_Faraona.JPG',
        minibio: 'Minha doguinha amada'
    },
    {
        nome: 'Red Velvet',
        imagem: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/4f012df686c9759da04453742d8f3360.jpg',
        minibio: 'Bolo gostoso com cream cheese'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
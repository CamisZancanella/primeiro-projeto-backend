const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome: 'Camila Zancanella',
        imagem: 'https://static.wikia.nocookie.net/studio-ghibli/images/f/ff/Kiki%27s_Delivery_Service_English.jpg/revision/latest?cb=20220413205802',
        minibio: 'Kiki delivery service, ghibli'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
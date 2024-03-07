const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333;

function mostraMulher(request, response) {
    response.json({
        nome: 'Camila Zancanella',
        imagem: 'https://avatars.githubusercontent.com/u/101130880?v=4',
        minibio: 'Estudante de análise e desenvolvimento de sistemas, mãe da Ravióli'
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)
//importando biblioteca

const express = require('express'); //importa a framework express
const dotenv = require ('dotenv'); // importa o pacote dotenv para gerenciar variaisveis do ambiente
const cors = require('cors');//importa o cors para permitir requisiçoes de diferentes origens
const bodyParser = require('body-parser'); //importa o pacote bodyParser para analisar o corpo das requisições http

dotenv.config(); // carrega as variaveis definidas no arquivo '.env' para process.env(processos)

//iniciando nova aplicação express

const app = express();

// configurar o cors e o bodyParser
app.use(cors()); // habilita cors para todas as rotas
app.use(bodyParser.json()); //configura o bodyParser para analisar as requisições json

// Rota inicial para testar o servidor

app.get('/',(require, response)=>{
    response.send ("servior está ativo") //definir uma rota para testar o servidor
});

//configurar o servidor para uma porta especifica

 const port = process.env.PORT || 3000  // define a porta a partir da variavel do ambiente ou usa a porta 3000 como padrão
 app.listen(port,()=>{
    console.log(`servidor rodando na porta ${port}`) // imprime a mensagem quando o servidor estiver rodando
 })
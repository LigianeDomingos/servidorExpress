const express = require('express')
const server = express()

server.get('/', (req, res)=>{
    res.send('<h1> Home </h1>');
})

server.post('/contato',(req, res) =>{
    res.send('<h1>Metodo POST funciona!!...Agora precisamos retornar o texto digitado</h1>');

})

server.get('/contato', (req, res)=>{
    res.send(`
    <h1>Contato</h1>
    <form action="/contato" method="POST">
      <label for="email">Email:</label>
      <input type="email" name="email" id="email">
      <label for="mensagem">Mensagem:</label>
      <textarea name="mensagem" id="mensagem"></textarea>
      <input type="submit" value="Enviar">
    </form>
  `);
})

let port = 3000
server.listen(port, () =>{
    console.log(`Servidor rodando em http://localhost:${port}`)
    console.log('Para derrubar o servidor: ctrl+c');
})
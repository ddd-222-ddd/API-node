const express = require('express');

const con = require('./dbConection')
const app = express();

app.use(express.json());

//SELECT no banco de dados
app.get('/', async (req, res) => {
    const query = await con.execute('SELECT * FROM funcionario');
    return res.status(201).json(query);
});

//INSERT no banco de dados
app.post('/post', async (req, res) => {
    var reqBody = req.body;

    const nome = reqBody.nome;
    const datanas = reqBody.datanas;
    const rua = reqBody.rua;
    const num = reqBody.num;
    const salario = reqBody.salario;
    const cargo= reqBody.cargo

    const query = await con.execute(`INSERT INTO funcionario (nome, datanas, rua, num, salario, cargo) VALUES ('${nome}', '${datanas}', '${rua}', '${num}', '${salario}', '${cargo}')`);
    return res.status(201).json(query);
});

app.listen(3003, () => {console.log("ligado na porta 3003")});
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.json({message: 'Hello world'}));
app.get('/sair', (req, res) => res.json({message: 'saindo....'}))

app.listen(port, () => console.log('Servidor on'));

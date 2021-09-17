const express = require ('express');
const app = express();
const path = require('path');
const puerto = process.env.PORT || 3000;
app.listen(puerto, () => console.log('Servidor corriendo en el puerto 3000'));
app.use(express.static('./public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/views/index.html')));
app.get('/registro', (req, res) => res.sendFile(path.join(__dirname, '/views/register.html')))
app.get('/login', (req,res) => res.sendFile(path.join(__dirname, '/views/login.html')))

// const jsonServer = require('json-server');
// const path = require('path');
// const express = require('express');

// const server = express();
// const router = jsonServer.router('data/db.json');
// const middlewares = jsonServer.defaults({
//   static: path.join(__dirname, 'code')
// });

// const PORT = process.env.PORT || 3000;

// server.use(middlewares);
// server.use('/api', router);

// // Rota para servir a página inicial
// server.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

// // Rota para servir a página de detalhes do repositório
// server.get('/pages/repo-detalhes.html', (req, res) => {
//   res.sendFile(path.join(__dirname, 'code', 'pages', 'repo-detalhes.html'));
// });

// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
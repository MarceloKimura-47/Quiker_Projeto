require('dotenv').config(); // Carregar variáveis de ambiente
const express = require('express');
const sequelize = require('./models/database'); // Importando a configuração do Sequelize
const Cliente = require('./models/cliente'); // Importando o modelo Cliente

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para permitir JSON nas requisições
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
    res.send('API funcionando! 🚀');
});

// Rota para retornar apenas os nomes dos clientes
app.get('/clientes', async (req, res) => {
    try {
        const clientes = await Cliente.findAll({
            attributes: ['nome'] // Selecionando apenas o campo 'nome'
        });
        res.json(clientes); // Retornando apenas os nomes dos clientes
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar clientes' });
    }
});

// Sincronizando o banco de dados e criando a tabela se não existir
sequelize.sync({ force: false }).then(() => {
    console.log('Banco de dados sincronizado!');
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

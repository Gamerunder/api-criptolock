
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3001;

// Configuração do CORS
app.use(cors());
app.use(express.json());

app.get("/",(req, res) => {
  res.send("Teste do capão SERVIDOR")
})
// Rota para processar as mensagens do chatbot
app.post('/api/chatbot', async (req, res) => {
  const { message } = req.body;
res.send("ROTA OKKKKK")
  try {
    const response = await fetch('https://api.vectorshift.ai/v1/pipeline/6812918d1abc4a478b83d78a/run', {
      method: 'POST',
      headers: {
        "Authorization": `Bearer sk_XXKvHbAh0IE7KU9PuNIZVVOKMqo7zTFAYcGFzzqgolJEA1ik`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "inputs": {"input_0": message}
      })
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Erro na comunicação com a API:', error);
    res.status(500).json({ error: 'Erro ao processar a mensagem', details: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

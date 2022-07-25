const { app } = require('./app');
require('dotenv').config();


app.use('/api', require('./routes/apiRoute'));



app.listen(process.env.PORT, () => {
    console.log('Servidor rodando na porta ', process.env.PORT);
})
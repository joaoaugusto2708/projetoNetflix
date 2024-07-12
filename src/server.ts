import express from "express"
import { sequelize } from "./database";

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log("Conectado ao banco");
    }).catch(() => {
        console.error("Conexão falhou");
    })
    console.log(`Iniciado na porta ${PORT}`)
});



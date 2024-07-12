import express from "express"
import { sequelize } from "./database";
import { adminjs, adminJSRouter } from "./admin";

const app = express();

app.use(express.static('public'))
//app.use(caminho, rotas)
app.use(adminjs.options.rootPath, adminJSRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log("Conectado ao banco");
    }).catch(() => {
        console.error("Conexão falhou");
    })
    console.log(`Iniciado na porta ${PORT}`)
});



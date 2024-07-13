import express from "express"
import { sequelize } from "./database";
import { adminJs, adminJsRouter } from "./admin";

const app = express();

app.use(express.static('public'))
//app.use(caminho, rotas)
app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log("Conectado ao banco");
    }).catch(() => {
        console.error("Conexão falhou");
    })
    console.log(`Iniciado na porta ${PORT}`)
});



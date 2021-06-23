import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

// yarn add @types/express -D
const app = express(); // inicializando o express

app.use(express.json()); // habilitando aplicação para trabalhar com JSON

app.use(router);

// é importante colocar depois das rotas /\
// criando um midder // midder de error é necessário passar 4 parametros // next = passa para um próximo nível 
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

    if(err instanceof Error) {
        return response.status(400).json({
            error: err.message
        });
    }

    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })

});

app.listen(3000, () => console.log("Server is running")); // definindo a porta que se quer chamar na aplicação localhost
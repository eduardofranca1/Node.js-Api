import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

// middle para saber se o usuário está autenticado

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {

    // recebendo o token
    const authToken = request.headers.authorization ;
    
    // validar se o token está preenchido
    if(!authToken) {
        return response.status(401).end();
    }
    // split = consegue passar uma expressão para dividir uma string, nesse caso o Bearer separando apenas um espaço
    const [, token] = authToken.split(" ");

    // validar se o token é válido
    try {
        const { sub } = verify ( token, "") as IPayload;

        // recuperar informações do usuário
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end;
    }   
    
}
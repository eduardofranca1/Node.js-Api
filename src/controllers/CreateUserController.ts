import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {

                // definindo quais são as typagens \/
    async handle(request: Request, response: Response) {

        const { name, email, admin, password } = request.body; // recebendo as informações (atributos) de User

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, admin, password}); // criando um user e passando os atributos que estão sendo recebidos do request body

        return response.json(user) // retornando as informações que estão sendo recuperadas 

    }

}

export { CreateUserController };
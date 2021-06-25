import { Request, Response } from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService";

class ListUserSendComplimentsController {

    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserSendComplimentsService = new ListUserSendComplimentsService();

        // recuperando o id do usuário
        const compliments = await listUserSendComplimentsService.excute(user_id);

        return response.json(compliments);
    }
}

export { ListUserSendComplimentsController };
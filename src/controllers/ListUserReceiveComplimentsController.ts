import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";

class ListUserReceiveComplimentsController {

    async handle(request: Request, response: Response) {

        const { user_id } = request;

        const listUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        // recuperando o id do usuário
        const compliments = await listUserReceiveComplimentsService.excute(user_id);

        return response.json(compliments);
    }
}

export { ListUserReceiveComplimentsController };
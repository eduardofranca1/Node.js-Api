import { getCustomRepository } from "typeorm";
import { ComplimentsRepositoires } from "../repositories/ComplimentsRepositoires";


class ListUserReceiveComplimentsService {

    async excute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositoires);

        const compliments = await complimentsRepositories.find({
            where : {
                user_receiver: user_id
            },
            // buscar objetos relacionados
            relations: ["userSender", "userReceiver", "tag"] 
        });

        return compliments;

    }
}

export { ListUserReceiveComplimentsService };
import { getCustomRepository } from "typeorm";
import { ComplimentsRepositoires } from "../repositories/ComplimentsRepositoires";


class ListUserSendComplimentsService {

    async excute(user_id: string) {
        const complimentsRepositories = getCustomRepository(ComplimentsRepositoires);

        const compliments = await complimentsRepositories.find({
            where : {
                user_sender: user_id
            }
        });

        return compliments;

    }
}

export { ListUserSendComplimentsService };
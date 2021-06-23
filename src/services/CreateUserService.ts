import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin } : IUserRequest ) {
        const usersRepositoires = getCustomRepository(UserRepositories);

        console.log("Email", email);

        if (!email) {
            throw new Error("Email incorrect.")
        }

        const userAlreadyExists = await usersRepositoires.findOne({
            email
        });

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = usersRepositoires.create({
            name,
            email,
            admin
        });

        await usersRepositoires.save(user);

        return user;
    }

}

export { CreateUserService };
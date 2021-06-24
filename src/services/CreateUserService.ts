import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    async execute({ name, email, admin = false , password } : IUserRequest ) {
        const usersRepositoires = getCustomRepository(UserRepositories);

        console.log("Email", email);

        if (!email) {
            throw new Error("Email incorrect.")
        }

        const userAlreadyExists = await usersRepositoires.findOne({
            email
        });

        const passwordHash = await hash(password, 8)

        if (userAlreadyExists) {
            throw new Error("User already exists.");
        }

        const user = usersRepositoires.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        await usersRepositoires.save(user);

        return user;
    }

}

export { CreateUserService };
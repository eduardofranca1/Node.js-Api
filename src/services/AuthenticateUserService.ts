import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UserRepositories } from "../repositories/UsersRepositories"


interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({email, password}: IAuthenticateRequest ) {
        const usersRepositoires = getCustomRepository(UserRepositories);

        // verifica se email existe
        const user = await usersRepositoires.findOne({
            email
        });

        if(!user) {
            throw new Error("Email or Password incorrect.")
        }

        // verifica se senha está correta
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error("Email or Password incorrect.")
        }

        // gerar token
        const token = sign(
        {
            email: user.email
        },
        "baaf9814fe50d823d9be0889454302ea", // chave gerada através do MD5 HASH Generator
        {
            subject : user.id,
            expiresIn: "1d"
        } 
        );

        return token;

    }
}

export { AuthenticateUserService }
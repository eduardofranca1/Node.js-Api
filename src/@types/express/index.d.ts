// vai pegar tudo que tem dentro do index.d.ts na pasta node_modules

declare namespace Express {
    export interface Request {
        user_id: string;
    }
}
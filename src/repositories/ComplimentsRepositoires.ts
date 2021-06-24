import { EntityRepository, Repository } from "typeorm";
import { Compliment } from "../entities/Compliment";

@EntityRepository(Compliment)
class ComplimentsRepositoires extends Repository<Compliment> {}

export { ComplimentsRepositoires };
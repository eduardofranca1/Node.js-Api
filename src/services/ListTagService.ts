import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";


class ListTagService {

    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();
        //customizar as tags
        // tags = tags.map((tag) => ({ ...tag, nameCustom: `#${tag.name}`}));

        //customizar as tags
        return classToPlain(tags);
    }
}

export { ListTagService };
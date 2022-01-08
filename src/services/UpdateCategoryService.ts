import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type CategoryUpdateRequest = {
    name: string;
    description: string;
    id: string;
};

export class UpdateCategoryService {
    async execute({
        id,
        name,
        description,
    }: CategoryUpdateRequest): Promise<Category | Error> {
        const repo = getRepository(Category);

        const category = await repo.findOne(id);

        if (!category || !id) {
            throw new Error("Category does not exists");
        }

        category.name = name ? name : category.name;
        category.description = description ? description : category.description;

        await repo.save(category);

        return category;
    }
}

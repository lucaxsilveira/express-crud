import { getRepository } from "typeorm";
import Category from "../entities/typeorm/Category";

export class DeleteCategoryService {
    async execute(id: string) {
        const repo = getRepository(Category);

        if (!(await repo.findOne(id)) || !id) {
            throw new Error("Category does not exists");
        }

        console.log("id", id);

        return await repo.delete(id);
    }
}

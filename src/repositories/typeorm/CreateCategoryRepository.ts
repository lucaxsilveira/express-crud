import { getRepository, Repository } from "typeorm";

import Category from "../../entities/typeorm/Category";
import ICreateCategoryRepository, {
    CategoryRequest,
} from "../interfaces/ICategory";

export default class CreateCategoryRepository
    implements ICreateCategoryRepository
{
    private ormRepository: Repository<Category>;

    constructor() {
        console.log("constructor");
        this.ormRepository = getRepository(Category);
        console.log("ormRepository", this.ormRepository);
    }

    async findByName(name: string): Promise<Category> {
        return await this.ormRepository.findOne({ name });
    }

    async create({ name, description }: CategoryRequest): Promise<Category> {
        const category = this.ormRepository.create({
            name,
            description,
        });

        await this.ormRepository.save(category);

        return category;
    }
}

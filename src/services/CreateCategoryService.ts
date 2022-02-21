import { inject, injectable } from "tsyringe";
import Category from "../entities/typeorm/Category";
import ICreateCategoryRepository, {
    CategoryRequest,
} from "../repositories/interfaces/ICategory";

@injectable()
export class CreateCategoryService {
    constructor(
        @inject("CreateCategoryRepository")
        private categoryService: ICreateCategoryRepository
    ) {}

    async execute({
        name,
        description,
    }: CategoryRequest): Promise<Category | Error> {
        console.log("this.categoryService", this.categoryService);

        if (await this.categoryService.findByName(name)) {
            throw new Error("Category already exists");
        }

        const category = this.categoryService.create({
            name,
            description,
        });

        return category;
    }
}

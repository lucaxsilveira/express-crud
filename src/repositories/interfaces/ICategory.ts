import Category from "../../entities/typeorm/Category";

export type CategoryRequest = {
    name: string;
    description: string;
};

export default interface ICreateCategoryRepository {
    create(data: CategoryRequest): Promise<Category>;
    findByName(name: string): Promise<Category>;
}

import { container } from "tsyringe";

import ICreateCategoryRepository from "../repositories/interfaces/ICategory";
import CreateCategoryRepository from "../repositories/typeorm/CreateCategoryRepository";

console.log("container file");

container.registerSingleton<ICreateCategoryRepository>(
    "CreateCategoryRepository",
    CreateCategoryRepository
);

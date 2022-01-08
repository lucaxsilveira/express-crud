import { Router } from "express";
import { UpdateCategoryController } from "./controllers/UpdateCategoryController";
import { CreateCategoryController } from "./controllers/CreateCategoryController";
import { GetAllCategoriesController } from "./controllers/GetAllCategoriesController";
import { DeleteCategoryController } from "./controllers/DeleteCategoryController";
import { CreateVideoController } from "./controllers/CreateVideoController";
import { GetAllVideosController } from "./controllers/GetAllVideosController";

const routes = Router();

routes.get("/categories", new GetAllCategoriesController().handle);
routes.post("/categories", new CreateCategoryController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);

export { routes };

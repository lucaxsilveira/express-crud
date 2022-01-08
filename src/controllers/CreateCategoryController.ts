import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name, description } = request.body;

        const service = new CreateCategoryService();

        try {
            const result = await service.execute({ name, description });

            return response.json(result);
        } catch ({ message }) {
            return response.status(400).json({ error: message });
        }
    }
}

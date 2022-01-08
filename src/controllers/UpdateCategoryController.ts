import { Request, Response } from "express";
import { UpdateCategoryService } from "../services/UpdateCategoryService";

export class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, description } = request.body;

        const service = new UpdateCategoryService();

        try {
            const result = await service.execute({ id, name, description });

            return response.json(result);
        } catch ({ message }) {
            return response.status(400).json({ error: message });
        }
    }
}

import { Request, Response } from "express";
import { DeleteCategoryService } from "../services/DeleteCategoryService";

export class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteCategoryService();
        try {
            await service.execute(id);

            return response.status(204).end();
        } catch ({ message }) {
            return response.status(404).json({ error: message });
        }
    }
}

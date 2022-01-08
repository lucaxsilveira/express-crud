import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController {
    async handle(request: Request, response: Response) {
        const { name, description, category_id, duration } = request.body;

        const service = new CreateVideoService();

        try {
            const result = await service.execute({
                duration,
                category_id,
                name,
                description,
            });

            return response.json(result);
        } catch ({ message }) {
            return response.status(400).json({ error: message });
        }
    }
}

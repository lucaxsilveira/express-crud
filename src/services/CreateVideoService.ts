import { getRepository } from "typeorm";
import Category from "../entities/typeorm/Category";
import Video from "../entities/typeorm/Video";

type VideoRequest = {
    name: string;
    description: string;
    duration: number;
    category_id: string;
};

export class CreateVideoService {
    async execute({
        name,
        description,
        duration,
        category_id,
    }: VideoRequest): Promise<Video | Error> {
        const videoRepository = getRepository(Video);
        const categoryRepository = getRepository(Category);

        if (!(await categoryRepository.findOne(category_id))) {
            throw new Error("Category does not exist");
        }

        if (await videoRepository.findOne({ name })) {
            throw new Error("Video already exists");
        }

        const video = videoRepository.create({
            name,
            description,
            duration,
            category_id,
        });

        await videoRepository.save(video);

        return video;
    }
}

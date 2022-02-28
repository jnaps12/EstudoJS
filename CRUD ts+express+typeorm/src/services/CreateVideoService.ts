import { getRepository } from 'typeorm';
import { Category } from '../entities/Category';
import { Video } from '../entities/video';

type VideoRequest = {
  name: string;
  description: string;
  duration: number;
  category_id: number;
}

export class CerateVideoService {
  async execute({ name, description, duration, category_id }: VideoRequest): Promise<Error | Video> {
    const repo = getRepository(Video);
    const repoCategory = getRepository(Category);

    if (!(await repoCategory.findOne(category_id))) {
      return new Error("Category does not existis");
    }

    const video = repo.create({ name, description, duration, category_id });

    await repo.save(video);

    return video;
  }
}
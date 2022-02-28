import { Request, Response } from "express";
import { CerateVideoService } from "../services/CreateVideoService";


export class CreateVideoController {
  async handle(request: Request, response: Response) {
    const {name, description, category_id, duration} = request.body
    

    const service = new CerateVideoService();

    const result = await service.execute({
      name,
      description,
      category_id,
      duration
    });

    if(result instanceof Error){
      return new response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
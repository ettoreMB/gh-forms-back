
import { ResultDto } from "../dtos/responsesDto";
import { ResultRepository } from "../repositories/result-repository";

export class SaveResponseUseCase {
  constructor(
    private responseRepository: ResultRepository
  ) { }

  async execute(request: ResultDto): Promise<void> {
    const data = request
    await this.responseRepository.create(data)
  }
}
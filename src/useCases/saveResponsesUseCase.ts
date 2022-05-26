import { NOMEM } from "dns";
import { ResultDto } from "../dtos/responsesDto";
import { ContactRepository } from "../repositories/contact-repository";
import { ResultRepository } from "../repositories/result-repository";

export class SaveResponseUseCase {
  constructor(
    private responseRepository: ResultRepository
  ) { }

  async execute(request: ResultDto): Promise<void> {
    const data = request
    console.log(data)
    await this.responseRepository.create(data)
  }
}
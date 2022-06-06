import { ResponsesHospitalTraumaDTO } from "../../dtos/responses_hospital_trauma_DTO"
import { ResultPesquisaHospitalRepository } from "../../repositories/result-repository"

export class saveResponsesPesquisasHospitaisUseCase {
  constructor(
    private responsesPesquisasHospitaisRepository: ResultPesquisaHospitalRepository,
  ) { }

  async execute(request: ResponsesHospitalTraumaDTO) {
    const data = request
    await this.responsesPesquisasHospitaisRepository.create(data)
  }
}
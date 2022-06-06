import { responsesMedicoTraumaDTO } from "../../dtos/responses_medico_trauma_DTO"
import { ResultPesquisaMedicosRepository } from "../../repositories/result-repository"

export class SaveResponsesPesquisasMedicosTraumaUseCase {
  constructor(
    private responsesPesquisasMedicosTraumaRepository: ResultPesquisaMedicosRepository,
  ) { }


  async execute(request: responsesMedicoTraumaDTO) {
    const data = request
    await this.responsesPesquisasMedicosTraumaRepository.create(data)
  }
}
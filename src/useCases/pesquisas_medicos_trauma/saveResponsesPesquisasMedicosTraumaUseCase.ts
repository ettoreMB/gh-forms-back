import { responses_medico_traumaDTO } from "../../dtos/responses_medico_traumaDTO"
import { ResultPesquisaMedicosRepository } from "../../repositories/result-repository"

export class SaveResponsesPesquisasMedicosTraumaUseCase {
  constructor(
    private responsesPesquisasMedicosTraumaRepository: ResultPesquisaMedicosRepository,
  ) { }


  async execute(request: responses_medico_traumaDTO) {
    const data = request
    await this.responsesPesquisasMedicosTraumaRepository.create(data)
  }
}
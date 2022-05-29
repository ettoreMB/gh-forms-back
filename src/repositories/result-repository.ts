import { ResultDto } from "../dtos/responsesDto";
import { responses_medico_traumaDTO } from "../dtos/responses_medico_traumaDTO";


export interface ResultRepository {
  create: (data: ResultDto) => Promise<void>;
}

export interface ResultPesquisaMedicosRepository {
  create: (data: responses_medico_traumaDTO) => Promise<void>;
}

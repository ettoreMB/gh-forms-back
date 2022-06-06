import { ResultDto } from "../dtos/responsesDto";
import { ResponsesHospitalTraumaDTO } from "../dtos/responses_hospital_trauma_DTO";
import { responsesMedicoTraumaDTO } from "../dtos/responses_medico_trauma_DTO";


export interface ResultRepository {
  create: (data: ResultDto) => Promise<void>;
}

export interface ResultPesquisaMedicosRepository {
  create: (data: responsesMedicoTraumaDTO) => Promise<void>;
}

export interface ResultPesquisaHospitalRepository {
  create: (data: ResponsesHospitalTraumaDTO) => Promise<void>;
}
import { ResultDto } from "../dtos/responsesDto";


export interface ResultRepository {
  create: (data: ResultDto) => Promise<void>;
}
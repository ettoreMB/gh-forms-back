"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveResponsesPesquisasHospitaisUseCase = void 0;
class saveResponsesPesquisasHospitaisUseCase {
    constructor(responsesPesquisasHospitaisRepository) {
        this.responsesPesquisasHospitaisRepository = responsesPesquisasHospitaisRepository;
    }
    async execute(request) {
        const data = request;
        await this.responsesPesquisasHospitaisRepository.create(data);
    }
}
exports.saveResponsesPesquisasHospitaisUseCase = saveResponsesPesquisasHospitaisUseCase;

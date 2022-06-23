"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveResponsesPesquisasMedicosTraumaUseCase = void 0;
class SaveResponsesPesquisasMedicosTraumaUseCase {
    constructor(responsesPesquisasMedicosTraumaRepository) {
        this.responsesPesquisasMedicosTraumaRepository = responsesPesquisasMedicosTraumaRepository;
    }
    async execute(request) {
        const data = request;
        await this.responsesPesquisasMedicosTraumaRepository.create(data);
    }
}
exports.SaveResponsesPesquisasMedicosTraumaUseCase = SaveResponsesPesquisasMedicosTraumaUseCase;

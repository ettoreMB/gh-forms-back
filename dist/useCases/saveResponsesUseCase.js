"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SaveResponseUseCase = void 0;
class SaveResponseUseCase {
    constructor(responseRepository) {
        this.responseRepository = responseRepository;
    }
    async execute(request) {
        const data = request;
        await this.responseRepository.create(data);
    }
}
exports.SaveResponseUseCase = SaveResponseUseCase;

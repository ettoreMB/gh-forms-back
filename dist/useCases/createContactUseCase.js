"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContactUseCase = void 0;
class CreateContactUseCase {
    constructor(contactRepository) {
        this.contactRepository = contactRepository;
    }
    async execute(request) {
        const { nome, email, telefone, cargo, empresa } = request;
        if (!nome)
            throw new Error('Nome é obrigatório');
        if (!email)
            throw new Error('Nome é obrigatório');
        this.contactRepository.create({
            nome,
            email,
            telefone,
            cargo,
            empresa,
        });
    }
}
exports.CreateContactUseCase = CreateContactUseCase;

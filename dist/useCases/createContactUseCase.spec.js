"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createContactUseCase_1 = require("./createContactUseCase");
const createFeedBackSpy = jest.fn();
const createContact = new createContactUseCase_1.CreateContactUseCase({ create: createFeedBackSpy });
describe('Create Contact test', () => {
    it('Should create  a new  contact', async () => {
        await expect(createContact.execute({
            nome: 'Teste',
            email: 'teste@teste.com.br',
            telefone: '11-1111-1111',
            cargo: 'sem cargo',
            empresa: 'sem empresa'
        })).resolves.not.toThrow();
    });
});

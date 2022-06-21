"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const saveResponsesUseCase_1 = require("./saveResponsesUseCase");
const saveResponseSpy = jest.fn();
const saveResponses = new saveResponsesUseCase_1.SaveResponseUseCase({ create: saveResponseSpy });
// describe('Save Responses', () => {
//   it('Should save responses', async () => {
//     await expect(saveResponses.execute({
//       nome: 'Teste',
//       email: 'Teste',
//       telefone: 'Teste',
//       recomendacoes: "Test",
//     })).resolves.not.toThrow();
//   })
// })

import { SaveResponseUseCase } from "./saveResponsesUseCase";
const saveResponseSpy = jest.fn()

const saveResponses = new SaveResponseUseCase(
  { create: saveResponseSpy }
);

// describe('Save Responses', () => {
//   it('Should save responses', async () => {
//     await expect(saveResponses.execute({
//       nome: 'Teste',
//       email: 'Teste',
//       telefone: 'Teste',
//       recomendacoes: "Test"
//     })).resolves.not.toThrow();
//   })
// })
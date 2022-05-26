import express from 'express';
import { PrismaContactsRepository } from './repositories/prisma/prisma-contacts-repository';
import { PrismaResultsRepository } from './repositories/prisma/prisma-results-repository';
import { CreateContactUseCase } from './useCases/createContactUseCase';
import { SaveResponseUseCase } from './useCases/saveResponsesUseCase';

export const routes = express.Router();


routes.post('/contact', async (req, res) => {
  const contactRepository = new PrismaContactsRepository();
  const createContactUsCase = new CreateContactUseCase(contactRepository);

  const { nome, email, telefone, cargo, empresa } = req.body;

  await createContactUsCase.execute({ nome, email, telefone, cargo, empresa });

  return res.status(201).send("Contato criado com sucesso");
})


routes.post('/results', async (req, res) => {
  const data = req.body;
  const resultRepository = new PrismaResultsRepository();
  const saveResultsUseCase = new SaveResponseUseCase(resultRepository);

  await saveResultsUseCase.execute(data.data);
  return res.status(201).send('Pesquisa salava com sucesso')

})